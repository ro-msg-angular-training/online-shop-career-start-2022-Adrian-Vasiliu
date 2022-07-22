import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductDetailsComponent} from "./product-details/product-details.component";
import {ProductListComponent} from "./product-list/product-list.component";
import {ShoppingCartComponent} from "./shopping-cart/shopping-cart.component";
import {EditProductComponent} from "./edit-product/edit-product.component";
import {AddProductComponent} from "./add-product/add-product.component";
import {LoginComponent} from "./login/login.component";
import {AuthGuard} from "./auth/auth.guard";
import {CustomerGuard} from "./auth/customer.guard";

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {
    path: '',
    canActivate: [AuthGuard],
    children: [
      {path: '', redirectTo: "product-list", pathMatch: "full"},
      {path: 'product-list', component: ProductListComponent},
      {path: 'product-details/:id', component: ProductDetailsComponent},
      {
        path: 'shopping-cart', component: ShoppingCartComponent,
        canActivate: [CustomerGuard],
      },
      {
        path: 'add-product', component: AddProductComponent,
        // canActivate: [AdminGuard],
      },
      {path: 'edit-product/:id', component: EditProductComponent}]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
