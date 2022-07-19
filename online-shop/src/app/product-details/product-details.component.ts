import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  componentTitle = "Product details";
  name = "Product1"
  category = "CategoryI"
  price = "Price: 10"
  description = "Lorem ipsum loren ipsum"

  constructor() { }

  ngOnInit(): void {
  }

}
