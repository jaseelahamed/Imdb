import { Component } from '@angular/core';
import{Router}from '@angular/router'
import { ServiceService } from '../service.service';
import {  OnInit, Renderer2, ElementRef } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  constructor(private s:ServiceService,private r:Router,private renderer: Renderer2, private el: ElementRef ){}
  logout(){
    this.r.navigateByUrl("log")
    // localStorage.removeItem("acno")
    localStorage.removeItem("currentUsname")
  }
  ngOnInit(): void {
    const quoteEl = this.el.nativeElement.querySelector('.welcome-quote');
    setTimeout(() => {
      this.renderer.addClass(quoteEl, 'animate');
    }, 1000);
  }
}
