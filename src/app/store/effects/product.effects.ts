import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {
  addProduct, deleteProduct, loadProducts, loadProductsSuccess, loadProductsFailure, addProductSuccess,
  addProductFailure, editProduct, editProductSuccess, editProductFailure, deleteProductSuccess, deleteProductFailure,
  getProduct, getProductSuccess, getProductFailure
} from '../actions/product.actions';
import {ProductService} from '../../services/product.service';
import {of, from, mergeMap} from 'rxjs';
import {switchMap, map, catchError} from 'rxjs/operators';
import {Store} from '@ngrx/store';
import {AppState} from '../state/app.state';

@Injectable()
export class ProductEffects {
  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private productService: ProductService
  ) {
  }

  // Run this code when a load action is dispatched
  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadProducts),
      switchMap(() =>
        // Call the get method, convert it to an observable
        from(this.productService.getProducts()).pipe(
          // Take the returned value and return a new success action containing the items
          map((products) => loadProductsSuccess({products: products})),
          // Or... if it errors return a new failure action containing the error
          catchError((error) => of(loadProductsFailure({error})))
        )
      )
    )
  );

  getProduct$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getProduct),
      mergeMap(({ productId }) => {
        return this.productService.getProduct(productId).pipe(
          map((product) => getProductSuccess({ product })),
          catchError((error) => of(getProductFailure({error})))
        );
      })
    );
  });

  addProduct$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(addProduct),
      mergeMap(({product}) => {
        return this.productService.addProduct(product).pipe(
          map((product) => addProductSuccess({product})),
          catchError((error) => of(addProductFailure({error})))
        );
      })
    );
  });

  editProduct$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(editProduct),
      mergeMap(({product}) => {
        return this.productService.updateProduct(product).pipe(
          map(() => editProductSuccess({product})),
          catchError((error) => of(editProductFailure({error})))
        );
      })
    );
  });

  deleteProduct$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(deleteProduct),
      mergeMap(({ id }) => {
        return this.productService.deleteProduct(id).pipe(
          map(() => deleteProductSuccess({ id })),
          catchError((error) => of(deleteProductFailure({error})))
        );
      })
    );
  });

}
