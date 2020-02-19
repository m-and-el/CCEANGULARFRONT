import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components/components.component';
import { ProfileComponent } from './examples/profile/profile.component';
import { SignupComponent } from './examples/signup/signup.component';
import { LandingComponent } from './examples/landing/landing.component';
import { HomeComponent } from './components/home/home.component';
import { MagasinComponent } from './components/magasin/magasin.component';
import { ChemiseDetailComponent } from './components/chemise-detail/chemise-detail.component';

const routes: Routes =[
  { path: '', component: HomeComponent },
    { path: 'home',             component: HomeComponent },
    { path: 'magasin',             component: MagasinComponent },
    { path: 'detailchemise',             component: ChemiseDetailComponent },

   // { path: 'home',             component: ComponentsComponent },
    { path: 'user-profile',     component: ProfileComponent },
    { path: 'signup',           component: SignupComponent },
    { path: 'landing',          component: LandingComponent },
    //{ path: 'nucleoicons',      component: NucleoiconsComponent }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
