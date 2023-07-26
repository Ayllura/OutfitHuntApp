import { Component, OnInit } from '@angular/core';
import { ProductTypeService } from './product-type.service';
import { ProductType } from './product-type';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-type',
  templateUrl: './product-type.component.html',
  styleUrls: ['./product-type.component.css']
})
export class ProductTypeComponent implements OnInit {
  productTypeList: ProductType[] = [];
  newProductType: ProductType = { typeId: 0, description: '' };
  updateProductTypeForm: FormGroup;
  typeId: number = 0;

  constructor(
    private service: ProductTypeService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.updateProductTypeForm = this.fb.group({
      typeId: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      description: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.getProductTypeList();
  }

  getProductTypeList(): void {
    this.service.getAllProductType().subscribe(data => {
      this.productTypeList = data;
    });
  }

  deleteProductType(typeId: number): void {
    this.service.deleteProductType(typeId).subscribe(() => {
      console.log('Product Type deleted successfully');
      this.productTypeList = this.productTypeList.filter(productType => productType.typeId !== typeId);
    }, error => {
      console.error('Error deleting product type:', error);
    });
  }

  createNewProductType(): void {
    if (this.newProductType.typeId === 0 || this.newProductType.description === '') {
      return;
    }

    this.service.createProductType(this.newProductType).subscribe(data => {
      this.productTypeList.push(data);
      this.newProductType = { typeId: 0, description: '' };
    });
  }

  updateProductType() {
    if (this.updateProductTypeForm.invalid) {
      return;
    }

    const typeId = this.updateProductTypeForm.value.typeId;
    if (isNaN(typeId)) {
      console.error('Invalid typeId:', typeId);
      return;

    }

    const productType: ProductType = {
      typeId: typeId,
      description: this.updateProductTypeForm.value.description
    };

    this.service.updateProductType(typeId, productType).subscribe(
      data => {
        console.log('Product Type updated successfully');
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate(['/productType']);
        });
      },
      error => {
        console.error('Error updating product type:', error);
      }
    );
  }
}