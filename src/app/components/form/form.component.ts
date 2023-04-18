import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {IUser, User} from "../../models/user";
import {AddUserService} from "../../service/add-user.service";
import {AddMessageService} from "../../service/add-message.service";
import {GetThemesService} from "../../service/get-themes.service";
import {Theme} from "../../models/theme";
import {GetUsersService} from "../../service/get-user.service";
import {IMessage} from "../../models/message";


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  constructor(
    private AddUserService:AddUserService,
    private AddMessageService:AddMessageService,
    private GetThemesService:GetThemesService,
    private GetUsersService:GetUsersService,
  )
  {}

  flag:boolean
  user:IUser;
  message:IMessage;
   captchaImage: string;
   captchaCode: string;
    user_id:string | undefined;
   themes:Theme[]|any
   mask = ['+','7',' ','(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/,'-', /\d/, /\d/]
    users:User[]|any
    formSubmitted:boolean = false
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
     this.themes = this.GetThemesService.getThemes().subscribe(data=>{
       this.themes = data
     })

    this.users = this.GetUsersService.getUsers().subscribe(data=>{
      this.users = data
      console.log(this.users)
    })
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

     this.user = {
      name:this.myForm.controls["userName"].value,
      email:this.myForm.controls["userEmail"].value,
      phone:this.myForm.controls["userPhoneNumber"].value,
    }

     this.flag = false;

     this.users.map((userFromDB:IUser)=>{
       if(userFromDB.email === this.user.email && userFromDB.phone === this.user.phone){
         this.flag=true
         this.user_id= userFromDB._id


       }
     })

    if(this.flag){
      console.log('Такой контакт уже существует')
    }else{
      this.AddUserService.addUser(this.user).subscribe((data:any)=>{
        this.message = {
          theme_id:this.myForm.controls["theme"].value,
          text:this.myForm.controls["message"].value,
          user_id:data._id
        }
        this.AddMessageService.addMessage(this.message)
      })
    }
    if(this.flag){
      this.message = {
        theme_id:this.myForm.controls["theme"].value,
        text:this.myForm.controls["message"].value,
        user_id:this.user_id
      }
      this.AddMessageService.addMessage(this.message)
    }
    this.formSubmitted=true;

  }


}


