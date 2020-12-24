import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  public username: string = "Username";
  public password: string = "Password";
  public user = {
    username: '',
    password: ''
  };

  constructor() { }

  public ngOnInit(): void {
  }

  public handleUsername(username: string) {
    this.user.username = username;
  }

  public handlePassword(password: string) {
    this.user.password = password;
  }

  public doSomet(): void {
    console.log("Username: " + this.user.username);
    console.log("Password: " + this.user.password);
  }
}
