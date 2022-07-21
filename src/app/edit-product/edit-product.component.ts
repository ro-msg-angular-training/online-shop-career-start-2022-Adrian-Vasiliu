import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {ProductService} from "../product.service";
import {ProductItemDetailed} from "../../ProductItemDetailed";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})

export class EditProductComponent implements OnInit {
  // editForm = new FormGroup({
  //   name: new FormControl(''),
  //   price: new FormControl(-1),
  // });

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
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.getProduct(id).subscribe(product => {
      this.product = product;
      this.editForm.patchValue({
        name: this.product.name,
        category: this.product.category,
        price: this.product.price,
        description: this.product.description,
        image: this.product.image,
      })
    })
  }

  editSubmitted() {
    const newProduct: ProductItemDetailed = {
      id: this.product.id,
      name: this.editForm.value.name ?? '',
      category: this.editForm.value.category ?? '',
      price: this.editForm.value.price ?? -1,
      description: this.editForm.value.description ?? '',
      image: this.editForm.value.image ?? ''
    };
    this.productService.updateProduct(newProduct).subscribe();
  }

  resetForm() {
    this.ngOnInit();
  }
}
