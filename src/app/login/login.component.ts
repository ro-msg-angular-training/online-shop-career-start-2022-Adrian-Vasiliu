import {Component, OnInit} from '@angular/core';
import {AuthService} from "../auth.service";
import {FormBuilder, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {User} from "../../User";

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

  // user: User = {
  //   username: "username",
  //   password: "password"
  // };

  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private authService: AuthService) {
  }

  ngOnInit(): void {
  }

  login() {
    const user: User = {
      username: this.loginForm.value.username ?? '',
      password: this.loginForm.value.password ?? '',
    };
    this.authService.getUser(user).subscribe();
  }
}
