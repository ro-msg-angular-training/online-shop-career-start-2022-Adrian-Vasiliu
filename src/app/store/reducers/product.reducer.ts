import {createReducer, on} from '@ngrx/store';
import {ProductItemDetailed} from "../../interfaces/ProductItemDetailed";
import {
  addProduct, deleteProduct, loadProducts, loadProductsSuccess, loadProductsFailure, addProductSuccess,
  addProductFailure, editProduct, editProductSuccess, editProductFailure, addToCart, addToCartFailure, addToCartSuccess,
  deleteProductFailure, deleteProductSuccess, getProduct, getProductSuccess, getProductFailure,
} from '../actions/product.actions';

export interface ProductState {
  products: ProductItemDetailed[];
  product: ProductItemDetailed | null;
  error: string;
  status: 'pending' | 'loading' | 'error' | 'success';
}

export const initialState: ProductState = {
  products: [],
  product: null,
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

  on(getProduct, (state) => ({
    ...state,
    status: 'loading',
  })),
  on(getProductSuccess, (state, {product}) => ({
    ...state,
    status: 'success',
    product,
  })),
  on(getProductFailure, (state) => ({
    ...state,
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

  on(deleteProduct, (state) => ({
    ...state,
    status: 'loading',
  })),
  on(deleteProductSuccess, (state, {id}) => ({
    ...state,
    status: 'success',
    products: state.products.filter((product) => product.id !== id),
  })),
  on(deleteProductFailure, (state) => ({
    ...state,
    status: 'error',
  })),

  on(addToCart, (state) => ({
    ...state,
    status: 'loading',
  })),
  on(addToCartSuccess, (state, {product}) => ({
    ...state,
    status: 'success',
    products: [...state.products, product],
  })),
  on(addToCartFailure, (state) => ({
    ...state,
    status: 'error',
  })),
);
