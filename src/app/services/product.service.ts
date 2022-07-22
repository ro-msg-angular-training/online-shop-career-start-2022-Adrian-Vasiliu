import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from "@angular/common/http"
import {ProductItemDetailed} from "../interfaces/ProductItemDetailed";
import {Order} from "../interfaces/Order";

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  orders: Order [] = []

  constructor(private httpClient: HttpClient) {
  }

  getOrders() {
    return this.orders
  }

  getProduct(id: number): Observable<ProductItemDetailed> {
    return this.httpClient.get<ProductItemDetailed>("http://localhost:3000/products/" + id);
  }

  addToCart(product: ProductItemDetailed) {
    this.orders.push({productId: product.id, quantity: 1})
  }

  deleteProduct(id: number) {
    return this.httpClient.delete("http://localhost:3000/products/" + id);
  }

  checkout() {
    const data = {customer: "doej", products: this.orders}
    return this.httpClient.post("http://localhost:3000/products", data, {responseType: 'text'});
  }

  updateProduct(product: ProductItemDetailed) {
    return this.httpClient.put("http://localhost:3000/products/" + product.id, product);
  }

  addProduct(newProduct: ProductItemDetailed) {
    return this.httpClient.post("http://localhost:3000/products/", newProduct);
  }

}
