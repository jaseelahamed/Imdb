import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  // async callApi(){
  //   const  response = await fetch()
  // }
  currentUsname:any=''
  // currentAcno=''
  
  
  constructor(private http:HttpClient) {





    this.getDetails()
  }
    baseurl = "https://api.themoviedb.org/3";
apikey = "f5dbad5951c2922f7254e61a094eb629";

// trending movie   
trendingMovieApiData():Observable<any>
{
  return this.http.get(`${this.baseurl}/trending/movie/week?api_key=${this.apikey}`);
}
// banner api
bannerApiData():Observable<any>
{
  return this.http.get(`${this.baseurl}/trending/all/week?api_key=${this.apikey}`);
}


   
  getData(){
    return fetch("https://api.themoviedb.org/3/movie/550?api_key=f071902cc2499129e537cc2cbc81cb23")
  }
  imdbacounts:any={
    "jamsheer123":{username:"jamsheer123",email:"jamsheer@gmail.com",password:"6282533325"},
    "jaseel124":{username:"jaseel124",email:"jaseel@gmail.com",password:"6282533324"},
 
}
getDetails(){
  if(localStorage.getItem("currentUsname")){
    this.currentUsname=JSON.parse(localStorage.getItem("currentUsname")||'')
  }
  if(localStorage.getItem("imdbaccounts")){
    this.imdbacounts=JSON.parse(localStorage.getItem("imdbaccounts")||'')
  }
  // if(localStorage.getItem("ac")){
  //   this.currentAcno=JSON.parse(localStorage.getItem("acno")||'')
  // }
  
}
saveDetails(){
  if(this.currentUsname){
    localStorage.setItem("currentUsname",JSON.stringify(this.currentUsname))
  }
  if(this. imdbacounts){
    localStorage.setItem("imdbaccounts",JSON.stringify(this. imdbacounts))
  }
  // if(this.currentAcno){
  //   localStorage.setItem('acno',JSON.stringify(this.currentAcno))
  // }
}

login(username:any,pswd:any){
  if(username in this.imdbacounts){
    if(this.imdbacounts[username].password==pswd){
      this.currentUsname=this.imdbacounts[username].email
      
        
        
        
      this.saveDetails()
      return true
    }
    else{
      return false
    }

  }
  else return false
}

register( username: any,email:any, pswd: any ) {
  if(username in  this.imdbacounts) {
    alert("Accont Number already exists")
    return false
  }
  else{
    this.imdbacounts[username]={username:username,Email:email,password:pswd,}
    console.log(this.imdbacounts)
    this.saveDetails()
    return true
  }
}
deletAcc(acc:any){
  delete this.imdbacounts[acc]
  this.saveDetails()
  return true
}
getsearchMovie(data:any):Observable<any>
{
  return this.http.get(`${this.baseurl}/search/multi?api_key=${this.apikey}&query=${data.movieName}`);
}
}