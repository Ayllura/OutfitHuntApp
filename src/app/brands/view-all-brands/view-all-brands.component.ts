import { Component, OnInit } from '@angular/core';
import { BrandsService } from '../brands.service';
import { Brands } from '../brands';
import { NgForm } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view-all-brands',
  templateUrl: './view-all-brands.component.html',
  styleUrls: ['./view-all-brands.component.css']
})
export class ViewAllBrandsComponent implements OnInit {
  brandList: Brands[] = [];
  newBrand: Brands = { brandId: 0, name: '' }; // Store the data for the new brand
  updateBrandForm: FormGroup;
  brandId: number = 0;

  constructor(
    private service: BrandsService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router // Inject the Router service
  ) {
    this.updateBrandForm = this.fb.group({
      brandId: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      name: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.getBrandList();
    this.brandId = +(this.route.snapshot.paramMap.get('id') ?? 0);
    if (this.brandId) {
      this.service.getBrandById(this.brandId).subscribe((brand: Brands) => {
        this.updateBrandForm.patchValue({
          brandId: brand.brandId,
          name: brand.name
        });
      });
    }
  }

  getBrandList(): void {
    this.service.getAllBrands().subscribe(data => {
      this.brandList = data;
    });
  }

  // Add the deleteBrand method
  deleteBrand(brandId: number): void {
    this.service.deleteBrands(brandId).subscribe(() => {
      console.log('Brand deleted successfully');
      // After deletion, update the brandList to remove the deleted brand
      this.brandList = this.brandList.filter(brand => brand.brandId !== brandId);
    }, error => {
      console.error('Error deleting brand:', error);
    });
  }

  createNewBrand(): void {
    // Check if the new brand data is valid
    if (this.newBrand.brandId === 0 || this.newBrand.name === '') {
      return; // If the data is not valid, do not proceed with the creation
    }

    // Send the new brand data to the service to create the brand
    this.service.createBrand(this.newBrand).subscribe(data => {
      // Add the new brand to the list of brands
      this.brandList.push(data);
      // Reset the form to clear the input fields
      this.newBrand = { brandId: 0, name: '' };
      // Optionally, you can display a success message or perform other actions here
    });
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

    const brand: Brands = {
      brandId: brandId,
      name: this.updateBrandForm.value.name
    };

    this.service.updateBrands(brandId, brand).subscribe(
      data => {
        console.log('Brand updated successfully');
        // After successful update, navigate back to the same route with the updated brandId
        this.router.navigate(['/brands/view-brand', brandId]);
      },
      error => {
        console.error('Error updating brand:', error);
      }
    );
  }
}
