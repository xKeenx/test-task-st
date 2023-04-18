import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';
import { FormComponent } from './components/form/form.component';
import {AddUserService} from './service/add-user.service'
import { HttpClientModule } from '@angular/common/http';
import {AddMessageService} from "./service/add-message.service";
import {GetThemesService} from "./service/get-themes.service";
import {GetUsersService} from "./service/get-user.service";

@NgModule({
  declarations: [
    AppComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TextMaskModule,
    HttpClientModule
  ],
  providers: [AddUserService,AddMessageService,GetThemesService,GetUsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
