import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http"
import {ProductItem} from "../interfaces/ProductItem";
import {Observable} from "rxjs";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products$: Observable<ProductItem[]> | undefined;

  adminFunctions = false;
  shopping = false;

  constructor(private httpClient: HttpClient,
              private authService: AuthService) {
  }

  ngOnInit(): void {
    this.products$ = this.httpClient.get<ProductItem[]>("http://localhost:3000/products");
    const roles = this.authService.getUserRoles();
    if (roles.includes('admin')) {
      this.adminFunctions = true;
    }
    if (roles.includes('customer') || roles.includes('admin')) {
      this.shopping = true;
    }
  }

}
