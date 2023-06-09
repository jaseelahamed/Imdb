import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ImdbappComponent} from './imdbapp/imdbapp.component'
import { LoginComponent } from './login/login.component';

import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { PopularmoviesComponent } from './popularmovies/popularmovies.component';
import { TrendinmovieComponent } from './trendinmovie/trendinmovie.component';
import { SearchComponent } from './search/search.component';


const routes: Routes = [
  {path:'',component: HomeComponent },
  {path:'imb',component:ImdbappComponent },
  {path:'log',component:LoginComponent },
  {path:'sin',component:SignupComponent },
  {path:'pop',component:PopularmoviesComponent },
  {path:'trend',component: TrendinmovieComponent },
  {path:'srch',component: SearchComponent  },

  

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
  
  

export class AppRoutingModule { }
