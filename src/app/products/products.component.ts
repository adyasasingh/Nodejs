import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

private  products :any[]=[
  {name:"apple",cost:200},
  {name:"orange",cost:500}
];
  constructor() { }

  ngOnInit() {
  }

}
