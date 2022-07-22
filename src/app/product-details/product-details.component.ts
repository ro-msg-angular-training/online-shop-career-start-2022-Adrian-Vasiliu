import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductItemDetailed} from "../interfaces/ProductItemDetailed";
import {ProductService} from "../services/product.service";
import {AuthService} from "../services/auth.service";

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

  adminFunctions = false;
  shopping = false;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private authService: AuthService
  ) {
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.getProduct(id).subscribe(product => this.product = product)
    const roles = this.authService.getUserRoles();
    if (roles.includes('admin')) {
      this.adminFunctions = true;
    }
    if (roles.includes('customer') || roles.includes('admin')) {
      this.shopping = true;
    }
  }

  addToCart() {
    this.productService.addToCart(this.product);
  }

  deleteProduct() {
    this.productService.deleteProduct(this.product.id).subscribe();
  }
}
