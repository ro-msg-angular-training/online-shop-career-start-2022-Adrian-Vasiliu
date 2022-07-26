import {AppState} from "../state/app.state";
import {createSelector} from "@ngrx/store";
import {OrderState} from "../reducers/order.reducer";

export const selectOrders = (state: AppState) => state.orders;
export const selectAllOrders = createSelector(
  selectOrders,
  (state: OrderState) => state.orders
);
