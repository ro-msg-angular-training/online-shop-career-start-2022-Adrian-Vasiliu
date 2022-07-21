import {Component, OnInit, Input} from '@angular/core';
import {ProductService} from "../product.service";
import {Order} from "../../Order";

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  @Input() orders: Order [] = []

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.orders = this.productService.getOrders();
  }

  checkout() {
    this.productService.checkout();
    this.orders = []
  }
}
