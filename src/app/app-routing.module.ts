import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductDetailsComponent} from "./product-details/product-details.component";
import {ProductListComponent} from "./product-list/product-list.component";
import {ShoppingCartComponent} from "./shopping-cart/shopping-cart.component";

const routes: Routes = [
  {path: '', redirectTo: "product-list", pathMatch: "full"},
  {path: 'product-details/:id', component: ProductDetailsComponent},
  {path: 'product-list', component: ProductListComponent},
  {path: 'shopping-cart', component: ShoppingCartComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
