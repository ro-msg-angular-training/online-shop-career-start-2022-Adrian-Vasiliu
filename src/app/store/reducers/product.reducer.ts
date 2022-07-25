import {createReducer, on} from '@ngrx/store';
import {
  addProduct,
  deleteProduct,
  loadProducts,
  loadProductsSuccess,
  loadProductsFailure, addProductSuccess, addProductFailure, editProduct, editProductSuccess, editProductFailure
} from '../actions/product.actions';

import {ProductItemDetailed} from "../../interfaces/ProductItemDetailed";

export interface ProductState {
  products: ProductItemDetailed[];
  error: string;
  status: 'pending' | 'loading' | 'error' | 'success';
}

export const initialState: ProductState = {
  products: [],
  error: '',
  status: 'pending',
};

export const productReducer = createReducer(
  initialState, // Supply the initial state

  on(loadProducts, (state) => ({...state, status: 'loading'})),
  on(loadProductsSuccess, (state, {products}) => ({
    ...state,
    products: products,
    error: '',
    status: 'success',
  })),
  on(loadProductsFailure, (state, {error}) => ({
    ...state,
    error: error,
    status: 'error',
  })),

  on(addProduct, (state) => ({
    ...state,
    status: 'loading',
  })),
  on(addProductSuccess, (state, {product}) => ({ // Add the new product to the products array
    ...state,
    status: 'success',
    products: [...state.products, product],
  })),
  on(addProductFailure, (state) => ({
    ...state,
    status: 'error',
  })),

  on(editProduct, (state) => ({
    ...state,
    status: 'loading',
  })),
  on(editProductSuccess, (state, {product}) => ({
    ...state,
    status: 'success',
    products: [...state.products, product],
  })),
  on(editProductFailure, (state) => ({
    ...state,
    status: 'error',
  })),

  on(deleteProduct, (state, {id}) => ({
    ...state,
    products: state.products.filter((product) => product.id !== id),
  })),
);
