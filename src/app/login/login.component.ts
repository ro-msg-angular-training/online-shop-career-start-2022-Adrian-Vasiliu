import {Component, OnInit} from '@angular/core';
import {AuthService} from "../services/auth.service";
import {FormBuilder, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {UserCredentials} from "../interfaces/UserCredentials";

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

  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private authService: AuthService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  login() {
    console.log("test");
    const userCredentials: UserCredentials = {
      username: this.loginForm.value.username ?? '',
      password: this.loginForm.value.password ?? '',
    };
    this.authService.login(userCredentials).subscribe({
      next: () => {
        this.router.navigateByUrl('/product-list');
      },
      error: () => {
        alert('Username or password is incorrect...')
      },
    })
  }

}
