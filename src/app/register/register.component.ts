import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegesterService } from '../service/regester.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [RegesterService]
})
export class RegisterComponent implements OnInit {
  username !: string
  usernumber !: string
  userpass !: string
  regForm: FormGroup = new FormGroup({})

  constructor(private regService: RegesterService) { }

  ngOnInit(): void {
    this.regFormGroup()
  }

  regFormGroup() {
    this.regForm = new FormGroup({
      userNumber: new FormControl(null, Validators.required),
      userName: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),

    })
  }

  get userNumber() {
    return this.regForm.get('userNumber')
  }

  get userName() {
    return this.regForm.get('userName')
  }

  get password() {
    return this.regForm.get('password')
  }

  sendData() {
    let userData = {
      userName: this.username,
      number: this.usernumber,
      password: this.userpass
    }

    this.regService.post(userData).subscribe((res: any) => {
    })

  }
}
