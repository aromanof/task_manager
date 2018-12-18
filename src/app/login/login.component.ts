import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  public username: string;
  public password: string;

  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  constructor(public router: Router) { }

  ngOnInit() {
  }

  public login() {
    console.log(this.loginForm);
    console.log(this.loginForm.value.username, this.loginForm.value.password);
    this.router.navigate(['/main']);
  }
}
