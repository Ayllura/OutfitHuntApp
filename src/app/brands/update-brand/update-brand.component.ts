import { BrandsService } from '../brands.service';
import { Brands } from '../brands';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-brand',
  templateUrl: './update-brand.component.html',
  styleUrls: ['./update-brand.component.css']
})
export class UpdateBrandComponent implements OnInit {
  updateBrandForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private service: BrandsService,
    private route: ActivatedRoute
  ) {
    this.updateBrandForm = this.fb.group({
      brandId: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      name: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    const brandIdFromRoute = +this.route.snapshot.paramMap.get('id');
    this.service.getBrands(brandIdFromRoute).subscribe((brand: Brands) => {
      this.updateBrandForm.patchValue({
        brandId: brand.brandId,
        name: brand.name
      });
    });
  }

  updateBrand() {
    if (this.updateBrandForm.invalid) {
      return;
    }

    const brand: Brands = {
      brandId: this.updateBrandForm.value.brandId,
      name: this.updateBrandForm.value.name
    };

    this.service.updateBrands(brand.brandId, brand).subscribe(data => {
      console.log('Brand updated successfully:', data);
      // You can perform any actions after updating the brand here.
    });
  }
}
