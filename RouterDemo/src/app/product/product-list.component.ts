import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  title = "keyur";
  p : string[] = ["keyur","denish"];
  productList = [
    {
      "productId": 1001,
      "code": "P01",
      "description": "Home Computer",
      "price": 20000
    },
    {
      "productId": 1002,
      "code": "P02",
      "description": "Laptop",
      "price": 30000
    },
    {
      "productId": 1003,
      "code": "P03",
      "description": "Mobile",
      "price": 10000
    }
  ];

  constructor() { 
    console.log("Product List Component Object is created..");
  }

  ngOnInit() {
  }

}
