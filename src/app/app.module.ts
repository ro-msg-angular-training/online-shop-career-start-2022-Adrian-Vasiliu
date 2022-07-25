import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ProductDetailsComponent} from './product-details/product-details.component';
import {ProductListComponent} from './product-list/product-list.component';
import {ShoppingCartComponent} from './shopping-cart/shopping-cart.component';
import {ReactiveFormsModule} from "@angular/forms";
import {EditProductComponent} from './edit-product/edit-product.component';
import {AddProductComponent} from './add-product/add-product.component';
import {LoginComponent} from './login/login.component';
import {StoreModule} from "@ngrx/store";
import {productReducer} from "./store/reducers/product.reducer";
import {EffectsModule} from "@ngrx/effects";
import {ProductEffects} from "./store/effects/product.effects";

@NgModule({
  declarations: [
    AppComponent,
    ProductDetailsComponent,
    ProductListComponent,
    ShoppingCartComponent,
    EditProductComponent,
    AddProductComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot({products: productReducer}),
    EffectsModule.forRoot([ProductEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
