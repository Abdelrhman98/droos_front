import { BrowserModule }            from '@angular/platform-browser';
import { NgModule }                 from '@angular/core';

import { AppRoutingModule }         from './app-routing.module';
import { AppComponent }             from './app.component';
import { BrowserAnimationsModule }  from '@angular/platform-browser/animations';
import { LoginComponent }           from './auth/login/login.component';
import { SignupComponent }          from './auth/signup/signup.component';

import {MaterialModule} from './material/material.module';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component'
import { FlexLayoutModule } from '@angular/flex-layout';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    NavbarComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
