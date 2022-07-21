import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http"
import {ProductItem} from "../../ProductItem";
import {Observable} from "rxjs";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products$: Observable<ProductItem[]> | undefined;

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit(): void {
    this.products$ = this.httpClient.get<ProductItem[]>("http://localhost:3000/products");
  }

}
