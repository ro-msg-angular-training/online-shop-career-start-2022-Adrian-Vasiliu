import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductItemDetailed} from "../interfaces/ProductItemDetailed";
import {ProductService} from "../services/product.service";
import {AuthService} from "../services/auth.service";
import {Store} from "@ngrx/store";
import {AppState} from "../store/state/app.state";
import {deleteProduct, getProduct} from "../store/actions/product.actions";
import {addToCart} from "../store/actions/order.actions";
import {Subscription} from "rxjs";
import {selectUser} from "../store/selectors/login.selectors";
import {selectProduct} from "../store/selectors/product.selectors";
import {Actions} from "@ngrx/effects";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  product: ProductItemDetailed = {
    id: -1,
    name: "name",
    category: "category",
    price: 0,
    description: "description",
    image: "image"
  };


  user$ = this.store.select(selectUser);
  userSubscription = new Subscription();
  product$ = this.store.select(selectProduct);
  productSubscription = new Subscription();
  adminFunctions = false;
  shopping = false;

  constructor(
    private route: ActivatedRoute,
    private store: Store<AppState>,
  ) {
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    //this.productService.getProduct(id).subscribe(product => this.product = product)

    this.productSubscription = this.product$.subscribe((product) => {
      console.table(product);
      if (product !== null) {
        this.product = product;
      }
    });

    this.store.dispatch(getProduct({productId: id}));

    this.userSubscription = this.user$.subscribe((user) => {
      // console.table(user);
      if (user !== null) {
        this.adminFunctions = user?.roles.includes('admin') ?? false;
        this.shopping = (user?.roles.includes('customer') || user?.roles.includes('admin')) ?? false;
      }
    });

  }

  addToCart() {
    this.store.dispatch(addToCart({productId: this.product.id}));
  }

  deleteProduct() {
    this.store.dispatch(deleteProduct({id: this.product.id}));
  }
}
