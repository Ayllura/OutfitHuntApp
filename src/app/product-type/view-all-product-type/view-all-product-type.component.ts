import { Component, OnInit } from '@angular/core';
import { ProductTypeService } from '../product-type.service';
import { ProductType } from '../product-type';
import { NgForm } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view-all-product-type',
  templateUrl: './view-all-product-type.component.html',
  styleUrls: ['./view-all-product-type.component.css']
})
export class ViewAllProductTypeComponent implements OnInit {
  productTypeList: ProductType[] = [];
  newProductType: ProductType = { typeId: 0, description: '' }; // Store the data for the new Product Type
  updateProductTypeForm: FormGroup;
  typeId: number = 0;

  constructor(
    private service: ProductTypeService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router // Inject the Router service
  ) {
    this.updateProductTypeForm = this.fb.group({
      typeId: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      name: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.getProductTypeList();
    this.typeId = +(this.route.snapshot.paramMap.get('id') ?? 0);
    if (this.typeId) {
      this.service.getProductTypeById(this.typeId).subscribe((productType: ProductType) => {
        this.updateProductTypeForm.patchValue({
          typeId: productType.typeId,
          description: productType.description
        });
      });
    }
  }

  getProductTypeList(): void {
    this.service.getAllProductType().subscribe(data => {
      this.productTypeList = data;
    });
  }

  // Add the deleteBrand method
  deleteProductType(typeId: number): void {
    this.service.deleteProductType(typeId).subscribe(() => {
      console.log('Product Type deleted successfully');
      // After deletion, update the brandList to remove the deleted brand
      this.productTypeList = this.productTypeList.filter(productType => productType.typeId !== typeId);
    }, error => {
      console.error('Error deleting product type:', error);
    });
  }

  createNewProductType(): void {
    // Check if the new brand data is valid
    if (this.newProductType.typeId === 0 || this.newProductType.description === '') {
      return; // If the data is not valid, do not proceed with the creation
    }

    // Send the new brand data to the service to create the brand
    this.service.createProductType(this.newProductType).subscribe(data => {
      // Add the new brand to the list of brands
      this.productTypeList.push(data);
      // Reset the form to clear the input fields
      this.newProductType = { typeId: 0, description: '' };
      // Optionally, you can display a success message or perform other actions here
    });
  }

  updateBrand() {
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
        // After successful update, navigate back to the same route with the updated brandId
        this.router.navigate(['/product-type/view-product-type', typeId]);
      },
      error => {
        console.error('Error updating Product Type:', error);
      }
    );
  }
}