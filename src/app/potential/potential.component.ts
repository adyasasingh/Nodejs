import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-potential',
  templateUrl: './potential.component.html',
  styleUrls: ['./potential.component.css']
})
export class PotentialComponent implements OnInit {

  private m:string;
  private h:string;
  private g:string="9.18";
  private p:number;
  
  constructor() { }

  ngOnInit() {
  }
  mgh(){
    this.p = parseInt(this.m)*parseInt(this.g)*parseInt(this.h);
  }
}
