import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from "../../models/user";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
   captchaImage: string;
   captchaCode: string;
   users:User[] = []
   themes:string[] = ['Техподдержка','Продажи','Покупки','Другое..']
   mask = ['+','7',' ','(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/,'-', /\d/, /\d/]


  captchaValidator = (control: any) => {
    if (control.value === this.captchaCode) {
      return null;
    } else {
      return { invalidCaptcha: true };
    }
  }
  myForm: FormGroup = new FormGroup({

    userName: new FormControl('', [Validators.required]),
    userEmail: new FormControl('',[Validators.required,Validators.email]),
    userPhoneNumber: new FormControl('',[Validators.required,Validators.pattern("^((8|\\+7)[\\- ]?)?(\\(?\\d{3}\\)?[\\- ]?)?[\\d\\- ]{7,10}$")]),
    theme: new FormControl('',Validators.required),
    message: new FormControl('',Validators.required),
    captchaInput: new FormControl ('', [Validators.required,this.captchaValidator])
  });
  ngOnInit() {
    this.generateCaptcha();
  }

  refreshCaptcha() {
    this.generateCaptcha();
    this.myForm.controls['captchaInput'].reset()
  }
  generateCaptcha() {
    const captchaLength = 5; // Длина капчи
    const captchaChars = '0123456789'; // Доступные символы
    this.captchaCode = Array.from({length: captchaLength}, () => captchaChars[Math.floor(Math.random() * captchaChars.length)]).join('');
    this.captchaImage = `https://dummyimage.com/150x50/000/fff&text=${this.captchaCode}`;
  }





  submitForm() {


  }


}
