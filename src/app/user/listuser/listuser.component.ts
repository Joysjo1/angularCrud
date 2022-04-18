import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import {UserService} from '../service/user.service'


@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.scss']
})
export class ListuserComponent implements OnInit {
  modalRef!: BsModalRef;
  statusFlag:string='true';
  list: any;
  Data: any;
  term:any;
  p: number = 1;
  order:string ='id';

  // reverse:boolean=false;
  sort(order:any){
    this.order=order;
    // this.reverse=!this.order;

  }
  

  constructor(private modalService: BsModalService,private userService:UserService) { }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
 }

  ngOnInit(): void {
    this.getlist()
  }
  StausData(value:string){
    this.statusFlag=value

  }
getlist(){
  this.userService.getList().subscribe((data:any)=>{
    this.list=data.data;
    console.log(this.list)
  })
}
getUserbyId(item:any){
  this.userService.getUserListById(item.id).subscribe((data:any)=>{
    console.log(data)
    this.Data=data.data;
  })

}
key:string='id'
reverse:boolean=false;
sortData(keydata:any){
  this.key=keydata;
  this.reverse=!this.reverse;


}

}
