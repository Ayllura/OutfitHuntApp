import { ShopsService } from '../shops.service';
import { Shops } from '../shops';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-shop',
  templateUrl: './create-shop.component.html',
  styleUrls: ['./create-shop.component.css']
})

export class CreateShopComponent implements OnInit {
  createBrandForm: FormGroup;

  constructor(private fb: FormBuilder, private service: ShopsService) {
    this.createBrandForm = this.fb.group({
      shopId: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      name: ['', Validators.required],
      link: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  createNewShop() {
    if (this.createBrandForm.invalid) {
      return;
    }

    const shop: Shops = {
      shopId: this.createBrandForm.value.shopId,
      name: this.createBrandForm.value.name,
      link: this.createBrandForm.value.link
    };

    this.service.createShop(shop).subscribe(data => {
      console.log('Shop added successfully:', data);
    });
  }
}