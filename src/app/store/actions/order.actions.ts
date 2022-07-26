import {createAction, props} from "@ngrx/store";
import {Order} from "../../interfaces/Order";

export const loadOrders = createAction(
  '[ShoppingCart Page] loadOrders'
);
export const loadOrdersSuccess = createAction(
  '[ShoppingCart Page] loadOrdersSuccess',
  props<{ orders: Order[] }>()
);
export const loadOrdersFailure = createAction(
  '[ShoppingCart Page] loadOrdersFailure',
  props<{ error: string }>()
);

export const addToCart = createAction(
  '[ShoppingCart Page] AddProductToCart',
  props<{ productId: number }>()
);

export const checkout = createAction(
  '[ShoppingCart Page] checkout'
);

export const checkoutSuccess = createAction(
  '[API] checkoutSuccess'
);

export const checkoutFailure = createAction(
  '[API] checkoutFailure'
);
