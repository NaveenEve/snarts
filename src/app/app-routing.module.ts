import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';


import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { MechanicalComponent } from './mechanical/mechanical.component';
import { EceComponent } from './ece/ece.component';
import { EeeComponent } from './eee/eee.component';
import { CseComponent } from './cse/cse.component';
import { CivilComponent } from './civil/civil.component';
import { LoginComponent } from './login/login.component';
import { PsdComponent } from './psd/psd.component';


const routes: Routes = [
                         { path: '', redirectTo: 'home', pathMatch: 'full' },
                         {path:"home",component: HomeComponent},
                
                        {path:"aboutus",component: AboutusComponent},
                        {path:"contactus",component: ContactusComponent},
                        {path:"mechanical",component:MechanicalComponent},
                        {path:"ece",component:EceComponent},
                        {path:"eee",component:EeeComponent},
                        {path:"cse",component:CseComponent},
                        {path:"civil",component:CivilComponent},
                        {path:"login",component:LoginComponent},{
                          path:"psd",component:PsdComponent
                        }


                                                               ];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
