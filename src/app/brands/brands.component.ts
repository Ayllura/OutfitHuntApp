// Import necessary modules and services
import { Component, OnInit } from '@angular/core';
import { BrandsService } from './brands.service';
import { Brands } from './brands';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit {
  // Initialize class-level variables to store brand data
  brandList: Brands[] = [];
  filteredBrandList: Brands[] = [];
  newBrand: Brands = { brandId: 0, name: '' };
  updateBrandForm: FormGroup;
  searchForm: FormGroup;

  // Add a class-level variable to store the last clicked brandId
  private lastClickedBrandId: number | null = null;

  constructor(
    private service: BrandsService,
    private fb: FormBuilder,
    private router: Router
  ) {
    // Initialize the form groups for updating and searching brands
    this.updateBrandForm = this.fb.group({
      brandId: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      name: ['', Validators.required]
    });

    this.searchForm = this.fb.group({
      name: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // Initialize the component by fetching the brand list
    this.getBrandList();
  }

  getBrandList(): void {
    // Method to fetch all brands from the service and initialize the brand lists

    // Use the BrandsService to get all brands from the backend
    this.service.getAllBrands().subscribe(data => {
      this.brandList = data;
      // Initially, set filteredBrandList to the complete brandList
      this.filteredBrandList = [...this.brandList];
    });
  }

  createNewBrand(): void {
    // Method to create a new brand

    // Check if brandId is valid and name is not empty
    if (this.newBrand.brandId <= 0 || this.newBrand.name === '') {
      alert('Brand ID must be greater than 0 and Name cannot be empty.');
      return;
    }

    // Check if the brand already exists in brandList
    const isBrandRepeated = this.brandList.some(brand => brand.brandId === this.newBrand.brandId || brand.name === this.newBrand.name);
    if (isBrandRepeated) {
      alert('This brand already exists.');
      return;
    }

    // If the brand is not repeated, proceed with creating the new brand
    this.service.createBrand(this.newBrand).subscribe(
      data => {
        // Successful insert
        this.brandList.push(data);
        this.newBrand = { brandId: 0, name: '' };
        alert('Brand inserted successfully.');
      },
      error => {
        // Error handling for unsuccessful insert
        alert('Error inserting the brand.');
      }
    );
  }

  updateBrand() {
    // Method to update an existing brand

    if (this.updateBrandForm.invalid) {
      alert('Invalid form data. Please fill all required fields.');
      return;
    }

    const brandId = this.updateBrandForm.value.brandId;
    if (isNaN(brandId)) {
      console.error('Invalid brandId:', brandId);
      return;
    }

    const newName = this.updateBrandForm.value.name;
    const existingBrand = this.brandList.find(brand => brand.name === newName && brand.brandId !== brandId);
    if (existingBrand) {
      alert('A brand with the same name already exists. Please choose a different name.');
      return;
    }

    const brand: Brands = {
      brandId: brandId,
      name: newName
    };

    this.service.updateBrands(brandId, brand).subscribe(
      data => {
        alert('Brand updated successfully');
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate(['/brands']);
        });
      },
      error => {
        alert('Error updating brand.');
      }
    );
  }

  deleteBrands(brandId: number): void {
    // Method to delete a brand

    if (this.lastClickedBrandId === brandId) {
      // If the user clicked the same delete button twice, show a warning alert
      if (confirm('Are you sure you want to delete this Brand? Press OK to confirm.')) {
        // Proceed with brand deletion if the user confirmed
        this.service.deleteBrands(brandId).subscribe(
          () => {
            alert('Brand deleted successfully');
            this.brandList = this.brandList.filter(brand => brand.brandId !== brandId);
            // Reset the lastClickedBrandId to null for the next deletion
            this.lastClickedBrandId = null;
          },
          error => {
            alert('Error deleting Brand.');
            // Reset the lastClickedBrandId in case of an error to allow reconfirmation
            this.lastClickedBrandId = null;
          }
        );
      } else {
        // If the user cancels the deletion, reset the lastClickedBrandId
        this.lastClickedBrandId = null;
      }
    } else {
      // If the user clicked a different delete button, set the lastClickedBrandId to the current brandId
      this.lastClickedBrandId = brandId;
      // Show the confirmation alert
      if (confirm('Are you sure you want to delete this Brand? Press OK to confirm.')) {
        // Do not proceed with deletion at this point
        return;
      }
    }
  }

  // This method searches for brands by name.
  searchByName(): void {
    // Check if the search form is invalid (e.g., empty input).
    if (this.searchForm.invalid) {
      alert('Invalid search form data. Please enter a name to search.');
      return;
    }

    // Get the name entered in the search form.
    const nameToSearch = this.searchForm.get('name')?.value;

    // Filter the brandList based on the name input.
    this.filteredBrandList = this.brandList.filter(
      brand => brand.name.toLowerCase().trim().includes(nameToSearch.toLowerCase().trim())
    );

    // Check if there are no results.
    if (this.filteredBrandList.length === 0) {
      alert('No brands found for the entered name.');
    }
  }

  // This method resets the search form and shows all brands again.
  resetSearch(): void {
    // Reset the search form to clear the entered name.
    this.searchForm.reset();
    // Reset the filteredBrandList to show all brands again by copying brandList.
    this.filteredBrandList = [...this.brandList];
  }
}
