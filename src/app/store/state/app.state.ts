import {ProductState} from '../reducers/product.reducer';
import {OrderState} from "../reducers/order.reducer";
import {LoginState} from "../reducers/login.reducer";

export interface AppState {
  products: ProductState;
  orders: OrderState;
  login: LoginState;
}
