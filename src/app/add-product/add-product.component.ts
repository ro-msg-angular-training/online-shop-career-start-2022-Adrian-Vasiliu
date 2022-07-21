import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {ProductItemDetailed} from "../../ProductItemDetailed";
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../product.service";

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

  product: ProductItemDetailed = {
    id: -1,
    name: "name",
    category: "category",
    price: -1,
    description: "description",
    image: "image"
  };

  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private productService: ProductService) {
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
    this.productService.addProduct(newProduct).subscribe();
  }

  resetForm() {
    this.ngOnInit();
  }
}
