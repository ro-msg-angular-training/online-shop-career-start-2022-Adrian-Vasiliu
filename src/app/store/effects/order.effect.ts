import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {Store} from "@ngrx/store";
import {AppState} from "../state/app.state";
import {catchError, map, withLatestFrom} from "rxjs/operators";
import {from, mergeMap, of} from "rxjs";
import {OrderService} from "../../services/order.service";
import * as ordersActions from "../actions/order.actions";
import {checkoutFailure} from "../actions/order.actions";
import {selectAllOrders} from "../selectors/order.selectors";
import {AuthService} from "../../services/auth.service";
import {selectUser} from "../selectors/login.selectors";

@Injectable()
export class OrderEffects {
  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private orderService: OrderService,
    private authService: AuthService,
  ) {
  }

  checkout$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ordersActions.checkout),
      withLatestFrom(this.store.select(selectUser), this.store.select(selectAllOrders)),
      mergeMap(([_, user, orders]) => {
        if (user === null) {
          return of(checkoutFailure());
        }
        return this.orderService.checkout(user.username, orders).pipe(
          map(() => ordersActions.checkoutSuccess()),
          catchError(() => of(ordersActions.checkoutFailure()))
        );
      })
    );
  });

}
