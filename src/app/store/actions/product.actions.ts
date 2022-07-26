import {createAction, props} from '@ngrx/store';
import {ProductItemDetailed} from "../../interfaces/ProductItemDetailed";

export const loadProducts = createAction(
  '[ProductList Page] Load Products'
);
export const loadProductsSuccess = createAction(
  '[API] Load Products Success',
  props<{ products: ProductItemDetailed[] }>()
);
export const loadProductsFailure = createAction(
  '[API] Load Products Failure',
  props<{ error: string }>()
);

export const getProduct = createAction(
  '[ProductDetails Page] Get Product',
  props<{ productId: number }>()
);
export const getProductSuccess = createAction(
  '[API] Get Product Success',
  props<{ product: ProductItemDetailed }>()
);
export const getProductFailure = createAction(
  '[API] Get Products Failure',
  props<{ error: string }>()
);

export const addProduct = createAction(
  '[AddProduct Page] Add Product',
  props<{ product: ProductItemDetailed }>()
);
export const addProductSuccess = createAction(
  '[API] Add Product',
  props<{ product: ProductItemDetailed }>()
);
export const addProductFailure = createAction(
  '[API] Add Product',
  props<{ error: string }>()
);

export const editProduct = createAction(
  '[editProduct Page] Edit Product',
  props<{ product: ProductItemDetailed }>()
);
export const editProductSuccess = createAction(
  '[API] Edit Product',
  props<{ product: ProductItemDetailed }>()
);
export const editProductFailure = createAction(
  '[API] Edit Product',
  props<{ error: string }>()
);

export const deleteProduct = createAction(
  '[ProductDetails Page] Delete Product',
  props<{ id: number }>()
);
export const deleteProductSuccess = createAction(
  '[API] Delete Product',
  props<{ id: number }>()
);
export const deleteProductFailure = createAction(
  '[API] Delete Product',
  props<{ error: string }>()
);

export const addToCart = createAction(
  '[editProduct Page] addToCart',
  props<{ product: ProductItemDetailed }>()
);
export const addToCartSuccess = createAction(
  '[API] addToCart',
  props<{ product: ProductItemDetailed }>()
);
export const addToCartFailure = createAction(
  '[API] addToCart',
  props<{ error: string }>()
);
