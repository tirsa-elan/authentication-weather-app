import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {
  username !: string
  usernumber !: string
  Form: FormGroup = new FormGroup({})

  constructor(private loginservice: LoginService, private router: Router) { }

  ngOnInit(): void {
    this.formMethod()
  }

  formMethod() {
    this.Form = new FormGroup({
      userNumber: new FormControl(null, Validators.required),
      userName: new FormControl(null, Validators.required),

    })
  }

  get userNumber() {
    return this.Form.get('userNumber')
  }

  get userName() {
    return this.Form.get('userName')
  }

  login() {
    let userIfo = {
      userName: this.username,
      password: this.usernumber
    }
    this.loginservice.post(userIfo).subscribe((res: any) => {
      localStorage.setItem('token', res.token)
      this.router.navigate(['/userPanel'])
      localStorage.setItem('fullName', res.firstName+res.lastName)
    })
  }

  regpage() {
    this.router.navigate(['/register'])
  }

}
