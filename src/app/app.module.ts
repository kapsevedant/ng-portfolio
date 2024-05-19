import {NgModule} from '@angular/core';
import {BrowserModule, provideClientHydration} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './pages/home/home.component';
import {FeatherModule} from 'angular-feather';
import {Code, Menu, X,Github,Linkedin,Phone} from "angular-feather/icons";
import {MenuComponentComponent} from './landing/header/menu-component/menu-component.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from "@angular/material/button";
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { HeaderComponent } from './landing/header/header.component';
import { LandingComponent } from './landing/landing.component';
import {MatMenu, MatMenuModule} from "@angular/material/menu";
import { EducationComponent } from './pages/education/education.component';


const icons = {
  Code,
  Menu,
  X,
  Github,
  Linkedin,
  Phone
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponentComponent,
    AboutMeComponent,
    HeaderComponent,
    LandingComponent,
    EducationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FeatherModule.pick(icons),
    MatDialogModule,
    MatButtonModule,
    MatMenuModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
