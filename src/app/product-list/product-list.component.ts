import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products = [
    {
      name: "Product1",
      category: "CategoryI",
      price: 10,
      description: "Lorem ipsum loren ipsum"
    },
    {
      name: "Product2",
      category: "CategoryI",
      price: 11,
      description: "Lorem ipsum loren ipsum"
    },
    {
      name: "Product3",
      category: "CategoryII",
      price: 100,
      description: "Lorem ipsum loren ipsum"
    },
    {
      name: "Product4",
      category: "CategoryIII",
      price: 110,
      description: "Lorem ipsum loren ipsum"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
