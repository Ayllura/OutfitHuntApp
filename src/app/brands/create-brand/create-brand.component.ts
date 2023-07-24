import { BrandsService } from '../brands.service';
import { Brands } from '../brands';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-brand',
  templateUrl: './create-brand.component.html',
  styleUrls: ['./create-brand.component.css']
})

export class CreateBrandComponent implements OnInit {
  createBrandForm: FormGroup;

  constructor(private fb: FormBuilder, private service: BrandsService) {
    this.createBrandForm = this.fb.group({
      brandId: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      name: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  createNewBrand() {
    if (this.createBrandForm.invalid) {
      return;
    }

    const brand: Brands = {
      brandId: this.createBrandForm.value.brandId,
      name: this.createBrandForm.value.name
    };

    this.service.createBrand(brand).subscribe(data => {
      console.log('Brand added successfully:', data);
    });
  }
}