import { Component, OnInit } from '@angular/core';
import { BrandsService } from './brands.service';
import { Brands } from './brands';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit {
  brandList: Brands[] = [];
  newBrand: Brands = { brandId: 0, name: '' };
  updateBrandForm: FormGroup;
  brandId: number = 0;

  constructor(
    private service: BrandsService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.updateBrandForm = this.fb.group({
      brandId: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      name: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.getBrandList();
  }

  getBrandList(): void {
    this.service.getAllBrands().subscribe(data => {
      this.brandList = data;
    });
  }

  deleteBrand(brandId: number): void {
    this.service.deleteBrands(brandId).subscribe(() => {
      console.log('Brand deleted successfully');
      this.brandList = this.brandList.filter(brand => brand.brandId !== brandId);
    }, error => {
      console.error('Error deleting brand:', error);
    });
  }

  createNewBrand(): void {
    if (this.newBrand.brandId === 0 || this.newBrand.name === '') {
      return;
    }

    this.service.createBrand(this.newBrand).subscribe(data => {
      this.brandList.push(data);
      this.newBrand = { brandId: 0, name: '' };
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
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate(['/brands']);
        });
      },
      error => {
        console.error('Error updating brand:', error);
      }
    );
  }
}