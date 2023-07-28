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
  // Arrays to store product types and filtered product types
  productTypeList: ProductType[] = [];
  filteredProductTypeList: ProductType[] = [];

  // Object to store details of a new product type
  newProductType: ProductType = { typeId: 0, description: '' };

  // Form groups for updating product types and searching
  updateProductTypeForm: FormGroup;
  searchForm: FormGroup;

  // Class-level variable to store the last clicked typeId for deleting
  private lastClickedTypeId: number | null = null;

  constructor(
    private service: ProductTypeService,
    private fb: FormBuilder,
    private router: Router
  ) {
    // Initializing the form groups for updating and searching
    this.updateProductTypeForm = this.fb.group({
      typeId: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      description: ['', Validators.required]
    });

    this.searchForm = this.fb.group({
      description: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // Fetching the list of product types and populating the initial filtered list
    this.getProductTypeList();
  }

  getProductTypeList(): void {
    // Method to fetch the list of product types from the service
    // and set the productTypeList and filteredProductTypeList
    this.service.getAllProductType().subscribe(data => {
      this.productTypeList = data;
      // Initializing the filteredProductTypeList with all products initially
      this.filteredProductTypeList = this.productTypeList;
    });
  }

  createNewProductType(): void {
    // Method to create a new product type

    // Validating the form input for new product type
    if (this.newProductType.typeId <= 0 || this.newProductType.description === '') {
      alert('Product Type ID must be greater than 0 and Description cannot be empty.');
      return;
    }

    // Extracting the new description and checking if a product type with the same description already exists
    const newDescription = this.newProductType.description;
    const existingProductType = this.productTypeList.find(
      type => type.description === newDescription && type.typeId !== this.newProductType.typeId
    );

    // Displaying an alert if a product type with the same description already exists
    if (existingProductType) {
      alert('A product type with the same description already exists. Please choose a different description.');
      return;
    }

    // Creating the new product type through the service and subscribing to the response
    this.service.createProductType(this.newProductType).subscribe(data => {
      // Adding the newly created product type to the productTypeList
      this.productTypeList.push(data);
      // Resetting the newProductType object for the next product type creation
      this.newProductType = { typeId: 0, description: '' };
      alert('Product Type created successfully.');
    });
  }

  updateProductType() {
    // Method to update an existing product type

    // Validating the form input for updating product type
    if (this.updateProductTypeForm.invalid) {
      alert('Invalid form data. Please fill all required fields.');
      return;
    }

    // Extracting the typeId and checking if it's a valid number
    const typeId = this.updateProductTypeForm.value.typeId;
    if (isNaN(typeId)) {
      alert('Invalid typeId: ' + typeId);
      return;
    }

    // Extracting the new description and checking if a product type with the same description already exists
    const newDescription = this.updateProductTypeForm.value.description;
    const existingProductType = this.productTypeList.find(
      type => type.description === newDescription && type.typeId !== typeId
    );

    // Displaying an alert if a product type with the same description already exists
    if (existingProductType) {
      alert('A product type with the same description already exists. Please choose a different description.');
      return;
    }

    // Creating a new ProductType object with updated details
    const productType: ProductType = {
      typeId: typeId,
      description: newDescription
    };

    // Updating the product type through the service and subscribing to the response
    this.service.updateProductType(typeId, productType).subscribe(
      data => {
        alert('Product Type updated successfully');
        // Navigating to the product type component after successful update
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate(['/productType']);
        });
      },
      error => {
        alert('Error updating product type: ' + error);
      }
    );
  }

  deleteProductType(typeId: number): void {
    // Method to delete a product type based on the typeId

    // Checking if the user clicked the same delete button twice
    if (this.lastClickedTypeId === typeId) {
      // Showing a warning alert to confirm the deletion
      if (confirm('Are you sure you want to delete this Product Type? Click OK to confirm.')) {
        // Proceed with product type deletion if the user confirmed
        this.service.deleteProductType(typeId).subscribe(
          () => {
            alert('Product Type deleted successfully');
            // Updating the productTypeList after successful deletion
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
      // Show the confirmation alert without proceeding with deletion at this point
      if (confirm('Are you sure you want to delete this Product Type?')) {
        return;
      }
    }
  }

  searchByDescription(): void {
    // Method to search for product types by description

    // Validating the search form input
    if (this.searchForm.invalid) {
      alert('Invalid search form data. Please enter a description to search.');
      return;
    }

    // Extracting the description to search
    const descriptionToSearch = this.searchForm.get('description')?.value;

    // Filter the productTypeList based on the description input
    this.filteredProductTypeList = this.productTypeList.filter(
      productType => productType.description.toLowerCase().trim().includes(descriptionToSearch.toLowerCase().trim())
    );

    // Check if there are no results
    if (this.filteredProductTypeList.length === 0) {
      alert('No product types found for the entered description.');
    }
  }

  resetSearch(): void {
    // Method to reset the search form and display all product types

    // Resetting the search form to clear the input
    this.searchForm.reset();

    // Reset the filteredProductTypeList to show all product types again
    this.filteredProductTypeList = this.productTypeList;
  }
}