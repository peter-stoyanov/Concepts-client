import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginData = {}

  constructor(private authService: AuthService) { }

  post() {
      this.authService.loginUser(this.loginData)
  }

  ngOnInit() {
  }

}
