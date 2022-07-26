import {createReducer, on} from "@ngrx/store";
import {Order} from "../../interfaces/Order";
import * as ordersActions from "../actions/order.actions";

export interface OrderState {
  orders: Order[];
  error: string;
  status: 'pending' | 'loading' | 'error' | 'success';
}

export const initialState: OrderState = {
  orders: [],
  error: '',
  status: 'pending',
};

export const orderReducer = createReducer(
  initialState,

  on(ordersActions.loadOrders, (state) => ({...state, status: 'loading'})),
  on(ordersActions.loadOrdersSuccess, (state, {orders}) => ({
    ...state,
    orders: orders,
    error: '',
    status: 'success',
  })),
  on(ordersActions.loadOrdersFailure, (state, {error}) => ({
    ...state,
    error: error,
    status: 'error',
  })),

  on(ordersActions.addToCart, (state, { productId }) => {
    let productFound = false;
    const orders = state.orders.map((order) => {
      if (order.productId === productId) {
        productFound = true;
        return { productId, quantity: order.quantity + 1 };
      } else {
        return order;
      }
    });
    if (!productFound) {
      orders.push({ productId, quantity: 1 });
    }
    return { ...state, orders };
  }),

  on(ordersActions.checkout, (state) => ({
    ...state,
    status: 'loading',
  })),
  on(ordersActions.checkoutSuccess, (state) => ({
    ...state,
    status: 'success',
  })),
  on(ordersActions.checkoutFailure, (state) => ({
    ...state,
    checkoutStatus: 'error',
  }))

);
