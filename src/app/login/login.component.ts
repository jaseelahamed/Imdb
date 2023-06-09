import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  // usname: any = '';
  // passwd: any = '';
  constructor(
    private r: Router,
    private ss: ServiceService,
    private fb: FormBuilder
  ) {}

  lgform = this.fb.group({
    usname:['', [Validators.required, Validators.pattern('[a-zA-Z0-9]{8,}')]],

    paswd:['', [Validators.required, Validators.pattern('[a-zA-Z0-9]{8,}')]],
  });

  clicked() {
    let usname = this.lgform.value.usname;

    let paswd = this.lgform.value.paswd;

    if (this.lgform.get('usname')?.errors) {
      alert('invalid usname');
    }
    if (this.lgform.get('paswd')?.errors) {
      alert('invalid password');
    }
    if (this.lgform.valid) {
      let res = this.ss.login(usname, paswd);
      if (res == true) {
        alert('login successfull!!!');
        // localStorage.setItem("acno","pswd")
        this.r.navigateByUrl('imb');
      } else {
        alert('Login Failed!!');
      }
    } else {
      alert('invalid data');
    }
  }
}

//   clicked(){
//     if(this.usname in this.imdbacounts){
//       if(this.imdbacounts[this.usname].password==this.paswd){
//         alert("login successfull")
//         this.r.navigateByUrl("dashb")
//       }
//       else{
//         alert("password not valid")
//       }}
//       else{
//         alert("account number invalid")
//       }
//   }

// }
