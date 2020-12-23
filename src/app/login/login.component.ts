import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  username: string = "Username";
  password: string = "Password";

  constructor() { }

  public ngOnInit(): void {
    // let testLabel = "Username1";
  }


}
