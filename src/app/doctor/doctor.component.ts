import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {
private information : any ={};
private btn_stt :boolean = true;
private doctor :any [] = [
{name :"Dr Adyasa singh",pic :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEnajnChmZjiCg_hE6r50EGqfhvxbSwHtv5RmABPcCT0bFe8-7Hw",
mobile :986132534 , gender :"female"}
];
  constructor() { }

  ngOnInit() {
  }
save(){
  this.doctor.push(this.information);
  this.information ={};
}
deleteinformation(index){
  this.doctor.splice(index,1);
}
editinformation(pro){
 this.information = pro;
 this.btn_stt =false;
}
}
