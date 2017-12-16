import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NewuserComponent } from './newuser/newuser.component';
import { RouterModule } from '@angular/router';
import { ClickMeComponent } from './forms/click-me.component';
import { ClickMe2Component } from './forms/click-me2.component';
import {
  KeyUpComponent_v1,
  KeyUpComponent_v2,
  KeyUpComponent_v3,
  KeyUpComponent_v4
} from './forms/keyup.components';
import { LittleTourComponent } from './forms/little-tour.component';
import { LoopbackComponent } from './forms/loop-back.component';
import { FormsComponent } from './forms/forms.component';
import { HeroFormComponent } from './hero-form/hero-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NewuserComponent,
    ClickMeComponent,
    ClickMe2Component,
    KeyUpComponent_v1,
    KeyUpComponent_v2,
    KeyUpComponent_v3,
    KeyUpComponent_v4,
    LittleTourComponent,
    LoopbackComponent,
    FormsComponent,
    HeroFormComponent
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'newuser',
        component: NewuserComponent
      },
      {
      path: 'login',
        component: LoginComponent
      },
       {
      path: 'forms',
        component: FormsComponent
      },
      {
      path: 'hero-form',
        component: HeroFormComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
