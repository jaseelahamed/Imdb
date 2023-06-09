import { Component,Input,Output,EventEmitter } from '@angular/core';
import { ServiceService } from '../service.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-confirm',
  templateUrl: './delete-confirm.component.html',
  styleUrls: ['./delete-confirm.component.css']
})
export class DeleteConfirmComponent {
  @Input() item:string|undefined
@Output() onCancel=new EventEmitter
constructor(private ss:ServiceService,private r:Router){
  console.log(this.item)
}
Cancel(){
  this.onCancel.emit()
}
deleteacc(){
  let res=this.ss.deletAcc(this.item)
  if(res ==true){
    localStorage.removeItem("currentUser")
    localStorage.removeItem("acno")
    this.r.navigateByUrl("")
  }
  else{
    alert("Account Deleting Failed!!!!")
  }
}
}
