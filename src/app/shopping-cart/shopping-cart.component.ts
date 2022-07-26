import {Component, OnInit} from '@angular/core';
import {AppState} from "../store/state/app.state";
import {Store} from "@ngrx/store";
import {selectAllOrders} from "../store/selectors/order.selectors";
import * as ordersActions from "../store/actions/order.actions";

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})

export class ShoppingCartComponent implements OnInit {
  orders$ = this.store.select(selectAllOrders);

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
  }

  checkout() {
    this.store.dispatch(ordersActions.checkout());
  }

}
