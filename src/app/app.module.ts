import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { NgModule } from '@angular/core';

import { MaterialModule } from "./material/material.module";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './members/home/home.component';
import { MemberDashboardComponent } from './members/member-dashboard/member-dashboard.component';
import { FormInputComponent } from './common/form-input/form-input.component';
import {NoopAnimationsModule} from "@angular/platform-browser/animations";
import { FormInputPasswordComponent } from './common/form-input-password/form-input-password.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    MemberDashboardComponent,
    FormInputComponent,
    FormInputPasswordComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NoopAnimationsModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
