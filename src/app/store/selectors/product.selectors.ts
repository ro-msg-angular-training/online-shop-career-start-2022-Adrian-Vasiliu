import {createSelector} from '@ngrx/store';
import {AppState} from '../state/app.state';
import {ProductState} from '../reducers/product.reducer';

export const selectProducts = (state: AppState) => state.products;
export const selectAllProducts = createSelector(
  selectProducts,
  (state: ProductState) => state.products
);
