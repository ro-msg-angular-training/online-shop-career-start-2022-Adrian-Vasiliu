import {Injectable} from '@angular/core';
import {Order} from "../interfaces/Order";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})

export class OrderService {
  constructor(private httpClient: HttpClient) {
  }

  checkout(username: string, orders: Order[]): Observable<void> {
    const data = { customer: username, products: orders };
    return this.httpClient.post('http://localhost:3000/orders', data, {responseType: 'text',})
      .pipe(map(() => {}));
  }

}
