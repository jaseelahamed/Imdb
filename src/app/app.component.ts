import { Component } from '@angular/core';
import{Router}from '@angular/router'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  acno:any=''


  constructor(private r:Router){}
  title = 'imdb';
 
  deleteacc(){
    this.acno=JSON.parse(localStorage.getItem("acno")||'')
    console.log(this.acno)
  }
  canceldelete(){
    this.acno=''
  }
}
