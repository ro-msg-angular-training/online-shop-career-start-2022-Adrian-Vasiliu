import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http"
import {AuthService} from "../services/auth.service";
import {Store} from '@ngrx/store';
import {selectAllProducts} from '../store/selectors/product.selectors';
import {
  loadProducts
} from '../store/actions/product.actions';
import {AppState} from "../store/state/app.state";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})

export class ProductListComponent implements OnInit {
  public products$ = this.store.select(selectAllProducts);
  adminFunctions = false;
  displayedColumns: string[] = ['product-name', 'product-category', 'product-price', 'product-id', 'product-details'];

  constructor(private httpClient: HttpClient,
              private authService: AuthService,
              private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.store.dispatch(loadProducts());
    const roles = this.authService.getUserRoles();
    if (roles.includes('admin')) {
      this.adminFunctions = true;
    }
  }

}
