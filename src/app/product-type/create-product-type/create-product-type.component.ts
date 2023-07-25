import { ProductTypeService } from '../product-type.service';
import { ProductType } from '../product-type';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-product-type',
  templateUrl: './create-product-type.component.html',
  styleUrls: ['./create-product-type.component.css']
})

export class CreateProductTypeComponent implements OnInit {
  createProductTypeForm: FormGroup;

  constructor(private fb: FormBuilder, private service: ProductTypeService) {
    this.createProductTypeForm = this.fb.group({
      typeId: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      description: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  createNewProductType() {
    if (this.createProductTypeForm.invalid) {
      return;
    }

    const productType: ProductType = {
      typeId: this.createProductTypeForm.value.typeId,
      description: this.createProductTypeForm.value.description,
    };

    this.service.createProductType(productType).subscribe(data => {
      console.log('Product Type added successfully:', data);
    });
  }
}