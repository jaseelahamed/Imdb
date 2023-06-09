import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';



import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ImdbAppComponent } from './imdb-app/imdb-app.component';
import { ImdbappComponent } from './imdbapp/imdbapp.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import{HttpClientModule}from '@angular/common/http';
import { PopularmoviesComponent } from './popularmovies/popularmovies.component'
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { TrendinmovieComponent } from './trendinmovie/trendinmovie.component';
import { DeleteConfirmComponent } from './delete-confirm/delete-confirm.component';
import { ServiceService } from './service.service';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    ImdbAppComponent,
    ImdbappComponent,
    LoginComponent,
    SignupComponent,
    PopularmoviesComponent,
    TrendinmovieComponent,
    DeleteConfirmComponent,
    HomeComponent,
    FooterComponent,
    NavComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule    

  
  
    
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
