import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {ProductItemDetailed} from "../interfaces/ProductItemDetailed";
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../services/product.service";
import {Store} from "@ngrx/store";
import {AppState} from "../store/state/app.state";
import {addProduct} from "../store/actions/product.actions";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})

export class AddProductComponent implements OnInit {

  editForm = this.formBuilder.group({
    name: ['', Validators.required],
    category: ['', Validators.required],
    price: [-1, [Validators.required, Validators.min(1)]],
    description: ['', Validators.required],
    image: ['', Validators.required]
  })

  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private productService: ProductService,
              private store: Store<AppState>) {
  }

  ngOnInit(): void {
  }

  addProduct() {
    const newProduct: ProductItemDetailed = {
      id: -1,
      name: this.editForm.value.name ?? '',
      category: this.editForm.value.category ?? '',
      price: this.editForm.value.price ?? -1,
      description: this.editForm.value.description ?? '',
      image: this.editForm.value.image ?? '',
    };
    // this.productService.addProduct(newProduct).subscribe();
    this.store.dispatch(addProduct({product: newProduct}));
  }

  resetForm() {
    this.ngOnInit();
  }
}
