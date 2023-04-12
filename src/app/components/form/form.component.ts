import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {


  public mask = ['+','7',' ','(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/,'-', /\d/, /\d/]
  myForm: FormGroup = new FormGroup({

    name: new FormControl('', [Validators.required]),
    email: new FormControl('',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    phone_number: new FormControl('',[Validators.required,Validators.pattern("^((8|\\+7)[\\- ]?)?(\\(?\\d{3}\\)?[\\- ]?)?[\\d\\- ]{7,10}$")]),
    theme: new FormControl('',Validators.required),
    message: new FormControl('',Validators.required),
    captcha: new FormControl('',Validators.required),
  });

  submitForm() {
    console.log(this.myForm);
    this.myForm.reset()
  }

}
