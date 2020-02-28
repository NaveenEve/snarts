import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {HttpClientModule} from '@angular/common/http'

import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { MechanicalComponent } from './mechanical/mechanical.component';
import { EceComponent } from './ece/ece.component';
import { EeeComponent } from './eee/eee.component';
import { CseComponent } from './cse/cse.component';
import { CivilComponent } from './civil/civil.component';
import { LoginComponent } from './login/login.component';

import { AdminModule } from './admin/admin.module';
import { StudentModule } from './student/student.module';
import { PsdComponent } from './psd/psd.component';







@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,


    AboutusComponent,
    ContactusComponent,
    MechanicalComponent,
    EceComponent,
    EeeComponent,
    CseComponent,
    CivilComponent,
    LoginComponent,
    PsdComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AdminModule,
    HttpClientModule,
    StudentModule,
    
 
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
