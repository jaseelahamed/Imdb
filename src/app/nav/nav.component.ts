import { Component } from '@angular/core';
import{Router}from '@angular/router'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  constructor(private r:Router){}
  logout(){
    this.r.navigateByUrl("")
    // localStorage.removeItem("acno")
    localStorage.removeItem("currentUsname")
  }
}
