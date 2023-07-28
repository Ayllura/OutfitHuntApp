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
  brandList: Brands[] = [];
  filteredBrandList: Brands[] = [];
  newBrand: Brands = { brandId: 0, name: '' };
  updateBrandForm: FormGroup;
  searchForm: FormGroup;

  constructor(
    private service: BrandsService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.updateBrandForm = this.fb.group({
      brandId: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      name: ['', Validators.required]
    });

    // Initialize the search form
    this.searchForm = this.fb.group({
      name: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.getBrandList();
  }

  getBrandList(): void {
    this.service.getAllBrands().subscribe(data => {
      this.brandList = data;
      // Initially, set filteredBrandList to the complete brandList
      this.filteredBrandList = [...this.brandList];
    });
  }

  // Add a class-level variable to store the last clicked shopId
  private lastClickedBrandId: number | null = null;

  deleteBrands(brandId: number): void {
    if (this.lastClickedBrandId === brandId) {
      // If the user clicked the same delete button twice, show a warning alert
      if (confirm('Are you sure you want to delete this Brand?')) {
        // Proceed with shop deletion if the user confirmed
        this.service.deleteBrands(brandId).subscribe(
          () => {
            alert('Product Type deleted successfully');
            this.brandList = this.brandList.filter(brand => brand.brandId !== brandId);
            // Reset the lastClickedShopId to null for the next deletion
            this.lastClickedBrandId = null;
          },
          error => {
            alert('Error deleting Brand.');
            // Reset the lastClickedShopId in case of an error to allow reconfirmation
            this.lastClickedBrandId = null;
          }
        );
      } else {
        // If the user cancels the deletion, reset the lastClickedShopId
        this.lastClickedBrandId = null;
      }
    } else {
      // If the user clicked a different delete button, set the lastClickedShopId to the current shopId
      this.lastClickedBrandId = brandId;
      // Show the confirmation alert
      if (confirm('Are you sure you want to delete this Brand? Press OK to confirm.')) {
        // Do not proceed with deletion at this point
        return;
      }
    }
  }

  createNewBrand(): void {
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
    if (this.updateBrandForm.invalid) {
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
   // Add a new method for searching by name
   searchByName(): void {
    if (this.searchForm.invalid) {
      alert('Invalid search form data. Please enter a name to search.');
      return;
    }

    const nameToSearch = this.searchForm.get('name')?.value;
    // Filter the brandList based on the name input
    this.filteredBrandList = this.brandList.filter(
      brand => brand.name.toLowerCase().includes(nameToSearch.toLowerCase())
    );

    // Check if there are no results
    if (this.filteredBrandList.length === 0) {
      alert('No brands found for the entered name.');
    }
  }

  resetSearch(): void {
    this.searchForm.reset();
    // Reset the filteredBrandList to show all brands again
    this.filteredBrandList = [...this.brandList];
  }
}