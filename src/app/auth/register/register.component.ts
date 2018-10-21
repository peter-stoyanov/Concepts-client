import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  
  registerData = {}

  constructor(private authService: AuthService) { }

  post() {
      console.log(this.registerData)
      this.authService.registerUser(this.registerData)
  }

  ngOnInit() {
  }
}
