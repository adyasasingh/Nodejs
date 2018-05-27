import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.css']
})
export class SchoolComponent implements OnInit {

  private a: string;
  private b: string;
  private c: string;
  private d: string;
  private e: string;
  private x:number;
 


  constructor() { }
  avg(){
    alert("hii");
    this.x= (parseInt(this.a) + parseInt(this.b)+parseInt(this.c) + parseInt(this.d)+parseInt(this.e))/5;
  }

  ngOnInit() {
  }

}
