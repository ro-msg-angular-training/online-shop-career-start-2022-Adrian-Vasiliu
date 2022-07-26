import {Component, OnInit} from '@angular/core';
import {AuthService} from "../services/auth.service";
import {FormBuilder, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {UserCredentials} from "../interfaces/UserCredentials";
import {login, loginFailure, loginSuccess} from "../store/actions/login.actions";
import {Store} from "@ngrx/store";
import {AppState} from "../store/state/app.state";
import {Subscription} from "rxjs";
import {Actions, ofType} from "@ngrx/effects";
import {withLatestFrom} from "rxjs/operators";
import {selectRedirectUrl} from "../store/selectors/login.selectors";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  })

  loginSuccessSubscription = new Subscription();
  loginErrorSubscription = new Subscription();

  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private authService: AuthService,
              private router: Router,
              private store: Store<AppState>,
              private actions: Actions
  ) {
  }

  ngOnInit(): void {
  }

  login() {
    const userCredentials: UserCredentials = {
      username: this.loginForm.value.username ?? '',
      password: this.loginForm.value.password ?? '',
    };
    this.store.dispatch(login({credentials: userCredentials}))
    this.loginSuccessSubscription = this.actions
      .pipe(ofType(loginSuccess), withLatestFrom(this.store.select(selectRedirectUrl)))
      .subscribe(([_, redirectUrl]) => {
        this.router.navigateByUrl(redirectUrl);
      });
    this.loginErrorSubscription = this.actions
      .pipe(ofType(loginFailure))
      .subscribe(() => alert('Failed to log in!'));
  }

}
