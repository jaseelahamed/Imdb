import { Component } from '@angular/core';
import { Router } from '@angular/router';
import{ServiceService}from '../service.service'
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  constructor(private ss:ServiceService,private r:Router,private fb:FormBuilder){}
  regform=this.fb.group({
    username:['',[Validators.required,Validators.pattern("[a-zA-Z0-9]{8,}")]],
    Email:['',[Validators.required,Validators.pattern("[a-zA-Z 0-9_.+-]+@[a-zA-Z0-9_.+-]+\.[a-zA-Z0-9_.+-]")]],
    // phone:['',[Validators.required,Validators.pattern("[0-9]{10}")]],
    password:['',[Validators.required,Validators.pattern("[a-zA-Z0-9]{8,}")]]
  })

  

  clicked(){
   let username=this.regform.value.username
   let email=this.regform.value.Email
  //  let ph=this.regform.value.
   let pswd=this.regform.value.password
   if(this.regform.get("username")?.errors){
    alert("invalid username")
   }
   if(this.regform.get("email")?.errors){
    alert("invalid email")
   }
  //  if(this.regform.get("phone")?.errors){
  //   alert("invalid phone")
  //  }
   if(this.regform.get("password")?.errors){
    alert("invalid password")
   }

   if(this.regform.valid){
    let res=this.ss.register(username,email,pswd)
    if(res==true){
      alert("registration successful!!!")
      this.r.navigateByUrl("log")
    }
    else{
      alert("registration failed")
    }
  }
  else{
    alert("invalid data")
  }

}}


