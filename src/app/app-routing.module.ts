import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductDetailsComponent} from "./product-details/product-details.component";
import {ProductListComponent} from "./product-list/product-list.component";
import {ShoppingCartComponent} from "./shopping-cart/shopping-cart.component";
import {EditProductComponent} from "./edit-product/edit-product.component";
import {AddProductComponent} from "./add-product/add-product.component";

const routes: Routes = [
  {path: '', redirectTo: "product-list", pathMatch: "full"},
  {path: 'product-details/:id', component: ProductDetailsComponent},
  {path: 'product-list', component: ProductListComponent},
  {path: 'shopping-cart', component: ShoppingCartComponent},
  {path: 'edit-product/:id', component: EditProductComponent},
  {path: 'add-product', component: AddProductComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
