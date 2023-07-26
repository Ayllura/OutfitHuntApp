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


// Add a class-level variable to store the last clicked shopId
private lastClickedTypeId: number | null = null;

deleteProductType(typeId: number): void {
  if (this.lastClickedTypeId === typeId) {
    // If the user clicked the same delete button twice, show a warning alert
    if (confirm('Are you sure you want to delete this Product Type? Click OK to confirm.')) {
      // Proceed with shop deletion if the user confirmed
      this.service.deleteProductType(typeId).subscribe(
        () => {
          alert('Product Type deleted successfully');
          this.productTypeList = this.productTypeList.filter(productType => productType.typeId !== typeId);
          // Reset the lastClickedShopId to null for the next deletion
          this.lastClickedTypeId = null;
        },
        error => {
          alert('Error deleting Product Type.');
          // Reset the lastClickedShopId in case of an error to allow reconfirmation
          this.lastClickedTypeId = null;
        }
      );
    } else {
      // If the user cancels the deletion, reset the lastClickedShopId
      this.lastClickedTypeId = null;
    }
  } else {
    // If the user clicked a different delete button, set the lastClickedShopId to the current shopId
    this.lastClickedTypeId = typeId;
    // Show the confirmation alert
    if (confirm('Are you sure you want to delete this Product Type?')) {
      // Do not proceed with deletion at this point
      return;
    }
  }
}

  createNewProductType(): void {
    if (this.newProductType.typeId <= 0 || this.newProductType.description === '') {
        // Show an alert if brandId is invalid or name is empty
        alert('Product Type ID must be greater than 0 and Name cannot be empty.');
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