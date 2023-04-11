import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public mask = ['+','7',' ','(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/,'-', /\d/, /\d/]
  myForm: FormGroup = new FormGroup({

    name: new FormControl('', Validators.required),
    email: new FormControl('',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    phone_number: new FormControl(''),
    theme: new FormControl('',Validators.required),
    message: new FormControl('',Validators.required),
    captcha: new FormControl('',Validators.required),
  });

  submitForm() {
    console.log(this.myForm);
  }
}
