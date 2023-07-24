import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BrandsService } from '../brands.service';
import { Brands } from '../brands';

@Component({
  selector: 'app-update-brand',
  templateUrl: './update-brand.component.html',
  styleUrls: ['./update-brand.component.css']
})

export class UpdateBrandComponent implements OnInit {
  updateBrandForm: FormGroup;
  brandId: number = 0;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private service: BrandsService
  ) {
    this.updateBrandForm = this.fb.group({
      brandId: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      name: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.brandId = +(this.route.snapshot.paramMap.get('id')?? 0);
    if (this.brandId) {
      this.service.getBrandById(this.brandId).subscribe((brand: Brands) => {
        this.updateBrandForm.patchValue({
          brandId: brand.brandId,
          name: brand.name
        });
      });
    }
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
      },
      error => {
        console.error('Error updating brand:', error);
      }
    );
  }
} 