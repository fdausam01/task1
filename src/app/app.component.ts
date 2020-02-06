import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tutor01';

  login: LoginForm = new LoginForm();

  submit(){
    console.log(this.login);
  }
}

export class LoginForm{
  username: string;
  password: string;
}