import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService}from '../services/AuthService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  username: string;
  password: string;
  errorMessage = 'Invalid Credentials';
  successMessage: string;
  invalidLogin = false;
  loginSuccess = false;

  login:LoginComponent[];
  constructor( private AuthService: AuthService,private router:Router ) { }

  ngOnInit(): void{
}
handleLogin() {
  this.AuthService.login(this.username, this.password).subscribe((result) => {
    this.invalidLogin = false;
    this.loginSuccess = true;
    this.successMessage = 'Login Successful';
    this.router.navigate(['/home']);

    // redirect to main page
  }, () => {
    this.invalidLogin = true;
    this.loginSuccess = false;
  });
}

}
