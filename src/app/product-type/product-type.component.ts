import { Component, OnInit } from '@angular/core';
import { ProductTypeService } from './product-type.service';
import { ProductType } from './product-type';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-type',
  templateUrl: './product-type.component.html',
  styleUrls: ['./product-type.component.css']
})
export class ProductTypeComponent implements OnInit {
  productTypeList: ProductType[] = [];
  filteredProductTypeList: ProductType[] = [];
  newProductType: ProductType = { typeId: 0, description: '' };
  updateProductTypeForm: FormGroup;
  searchForm: FormGroup;

    // Add a class-level variable to store the last clicked typeId
    private lastClickedTypeId: number | null = null;

  constructor(
    private service: ProductTypeService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.updateProductTypeForm = this.fb.group({
      typeId: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      description: ['', Validators.required]
    });

    this.searchForm = this.fb.group({
      description: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.getProductTypeList();
  }

  getProductTypeList(): void {
    this.service.getAllProductType().subscribe(data => {
      this.productTypeList = data;
      // Initialize the filteredProductTypeList with all products initially
      this.filteredProductTypeList = this.productTypeList;
    });
  }

  deleteProductType(typeId: number): void {
    if (this.lastClickedTypeId === typeId) {
      // If the user clicked the same delete button twice, show a warning alert
      if (confirm('Are you sure you want to delete this Product Type? Click OK to confirm.')) {
        // Proceed with product type deletion if the user confirmed
        this.service.deleteProductType(typeId).subscribe(
          () => {
            alert('Product Type deleted successfully');
            this.productTypeList = this.productTypeList.filter(productType => productType.typeId !== typeId);
            // Reset the lastClickedTypeId to null for the next deletion
            this.lastClickedTypeId = null;
          },
          error => {
            alert('Error deleting Product Type.');
            // Reset the lastClickedTypeId in case of an error to allow reconfirmation
            this.lastClickedTypeId = null;
          }
        );
      } else {
        // If the user cancels the deletion, reset the lastClickedTypeId
        this.lastClickedTypeId = null;
      }
    } else {
      // If the user clicked a different delete button, set the lastClickedTypeId to the current typeId
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
      alert('Product Type ID must be greater than 0 and Description cannot be empty.');
      return;
    }

    const newDescription = this.newProductType.description;
    const existingProductType = this.productTypeList.find(
      type => type.description === newDescription && type.typeId !== this.newProductType.typeId
    );

    if (existingProductType) {
      alert('A product type with the same description already exists. Please choose a different description.');
      return;
    }

    this.service.createProductType(this.newProductType).subscribe(data => {
      this.productTypeList.push(data);
      this.newProductType = { typeId: 0, description: '' };
      alert('Product Type created successfully.');
    });
  }

  updateProductType() {
    if (this.updateProductTypeForm.invalid) {
      alert('Invalid form data. Please fill all required fields.');
      return;
    }

    const typeId = this.updateProductTypeForm.value.typeId;
    if (isNaN(typeId)) {
      alert('Invalid typeId: ' + typeId);
      return;
    }

    const newDescription = this.updateProductTypeForm.value.description;
    const existingProductType = this.productTypeList.find(
      type => type.description === newDescription && type.typeId !== typeId
    );

    if (existingProductType) {
      alert('A product type with the same description already exists. Please choose a different description.');
      return;
    }

    const productType: ProductType = {
      typeId: typeId,
      description: newDescription
    };

    this.service.updateProductType(typeId, productType).subscribe(
      data => {
        alert('Product Type updated successfully');
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate(['/productType']);
        });
      },
      error => {
        alert('Error updating product type: ' + error);
      }
    );
  }

  searchByDescription(): void {
    if (this.searchForm.invalid) {
      alert('Invalid search form data. Please enter a description to search.');
      return;
    }
  
    const descriptionToSearch = this.searchForm.get('description')?.value;
    // Filter the productTypeList based on the description input
    this.filteredProductTypeList = this.productTypeList.filter(
      productType => productType.description.toLowerCase().includes(descriptionToSearch.toLowerCase())
    );
  
    // Check if there are no results
    if (this.filteredProductTypeList.length === 0) {
      alert('No product types found for the entered description.');
    }
  }
  

  resetSearch(): void {
    this.searchForm.reset();
    // Reset the filteredProductTypeList to show all product types again
    this.filteredProductTypeList = this.productTypeList;
  }
}