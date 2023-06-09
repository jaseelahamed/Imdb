import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { OnInit } from '@angular/core';
import{Router}from '@angular/router'


@Component({
  selector: 'app-imdbapp',
  templateUrl: './imdbapp.component.html',
  styleUrls: ['./imdbapp.component.css']
})
export class ImdbappComponent implements OnInit{

constructor(private ss:ServiceService,private r:Router){ }
bannerResult:any=[];

ngOnInit(): void{
  this.bannerData();


}

// bannerDATA
bannerData(){
  this.ss.bannerApiData().subscribe((result)=>{
    console.log(result,'bannerresult#');
    this.bannerResult=result.results;
  });
  

}
logout(){
  this.r.navigateByUrl("log")
  // localStorage.removeItem("acno")
  localStorage.removeItem("currentUsname")
}
}