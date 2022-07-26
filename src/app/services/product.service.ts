import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from "@angular/common/http"
import {ProductItemDetailed} from "../interfaces/ProductItemDetailed";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private httpClient: HttpClient,) {
  }

  getProducts(): Observable<ProductItemDetailed[]> {
    return this.httpClient.get<ProductItemDetailed[]>("http://localhost:3000/products");
  }

  addProduct(newProduct: ProductItemDetailed): Observable<ProductItemDetailed> {
    return this.httpClient.post<ProductItemDetailed>("http://localhost:3000/products/", newProduct);
  }

  getProduct(id: number): Observable<ProductItemDetailed> {
    return this.httpClient.get<ProductItemDetailed>("http://localhost:3000/products/" + id);
  }

  updateProduct(product: ProductItemDetailed): Observable<void> {
    return this.httpClient.put<void>("http://localhost:3000/products/" + product.id, product);
  }

  deleteProduct(id: number) {
    return this.httpClient.delete("http://localhost:3000/products/" + id);
  }

}
