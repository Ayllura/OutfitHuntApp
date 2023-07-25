import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductTypeService } from '../product-type.service';
import { ProductType } from '../product-type';

@Component({
  selector: 'app-update-product-type',
  templateUrl: './update-product-type.component.html',
  styleUrls: ['./update-product-type.component.css']
})

export class UpdateProductTypeComponent implements OnInit {
  updateProductTypeForm: FormGroup;
  typeId: number = 0;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private service: ProductTypeService
  ) {
    this.updateProductTypeForm = this.fb.group({
      typeId: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      description: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.typeId = +(this.route.snapshot.paramMap.get('id')?? 0);
    if (this.typeId) {
      this.service.getProductTypeById(this.typeId).subscribe((productType: ProductType) => {
        this.updateProductTypeForm.patchValue({
          typeId: productType.typeId,
          description: productType.description
        });
      });
    }
  }

  updateBrand() {
    if (this.updateProductTypeForm.invalid) {
      return;
    }
  
    const typeId = this.updateProductTypeForm.value.productTypeId;
    if (isNaN(typeId)) {
      console.error('Invalid productTypeId:', typeId);
      return;
    }
  
    const productType: ProductType = {
      typeId: typeId,
      description: this.updateProductTypeForm.value.description
    };
  
    this.service.updateProductType(typeId, productType).subscribe(
      data => {
        console.log('Brand updated successfully');
      },
      error => {
        console.error('Error updating brand:', error);
      }
    );
  }
}