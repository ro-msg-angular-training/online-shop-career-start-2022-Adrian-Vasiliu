import {Injectable} from '@angular/core';
import {Order} from "../interfaces/Order";
import {HttpClient} from "@angular/common/http";
import {AuthService} from "./auth.service";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})

export class OrderService {
  constructor(private httpClient: HttpClient,
              private authService: AuthService) {
  }

  // addToCart(product: ProductItemDetailed) {
  //   this.orders.push({productId: product.id, quantity: 1})
  // }

  // checkout() {
  //   const data = {customer: this.authService.getUsername(), orders: this.orders}
  //   return this.httpClient.post("http://localhost:3000/orders", data, {responseType: 'text'});
  // }

  checkout(username: string, orders: Order[]): Observable<void> {
    const data = { customer: username, products: orders };
    return this.httpClient.post('http://localhost:3000/orders', data, {responseType: 'text',})
      .pipe(map(() => {}));
  }

}
