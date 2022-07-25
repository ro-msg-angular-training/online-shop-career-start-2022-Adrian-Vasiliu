import {createAction, props} from '@ngrx/store';
import {ProductItemDetailed} from "../../interfaces/ProductItemDetailed";

export const loadProducts = createAction(
  '[ProductList Page] Load Products'
);
export const loadProductsSuccess = createAction(
  '[ProductList Page] Load Products Success',
  props<{ products: ProductItemDetailed[] }>()
);
export const loadProductsFailure = createAction(
  '[ProductList Page] Load Products Failure',
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
  '[ProductDetails Page] delete Product',
  props<{ id: number }>()
);
