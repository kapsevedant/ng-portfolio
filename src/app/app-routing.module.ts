import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {AboutMeComponent} from "./pages/about-me/about-me.component";
import {LandingComponent} from "./landing/landing.component";
import {EducationComponent} from "./pages/education/education.component";

const routes: Routes = [
  {path:'',component:LandingComponent,
  children:[{ path: 'home', component: HomeComponent },
    { path: 'about', component: AboutMeComponent },
    { path: 'education', component: EducationComponent }]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
