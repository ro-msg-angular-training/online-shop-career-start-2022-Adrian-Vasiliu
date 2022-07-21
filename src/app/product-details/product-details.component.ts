import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductItemDetailed} from "../../ProductItemDetailed";
import {ProductService} from "../product.service";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  product: ProductItemDetailed = {
    id: -1,
    name: "name",
    category: "category",
    price: 0,
    description: "description",
    image: "image"
  };

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.getProduct(id).subscribe(product => this.product = product)
  }

  addToCart() {
    this.productService.addToCart(this.product);
  }

  deleteProduct() {
    this.productService.deleteProduct(this.product.id).subscribe();
  }
}
