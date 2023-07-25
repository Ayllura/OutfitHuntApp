import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ShopsService } from '../shops.service';
import { Shops } from '../shops';

@Component({
  selector: 'app-update-shop',
  templateUrl: './update-shop.component.html',
  styleUrls: ['./update-shop.component.css']
})

export class UpdateShopComponent implements OnInit {
  updateShopForm: FormGroup;
  shopId: number = 0;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private service: ShopsService
  ) {
    this.updateShopForm = this.fb.group({
      shopId: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      name: ['', Validators.required],
      link: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.shopId = +(this.route.snapshot.paramMap.get('id')?? 0);
    if (this.shopId) {
      this.service.getShopById(this.shopId).subscribe((shop: Shops) => {
        this.updateShopForm.patchValue({
          shopId: shop.shopId,
          name: shop.name,
          link: shop.link
        });
      });
    }
  }

  updateBrand() {
    if (this.updateShopForm.invalid) {
      return;
    }
  
    const shopId = this.updateShopForm.value.brandId;
    if (isNaN(shopId)) {
      console.error('Invalid brandId:', shopId);
      return;
    }
  
    const shop: Shops = {
      shopId: shopId,
      name: this.updateShopForm.value.name,
      link: this.updateShopForm.value.link
    };
  
    this.service.updateShop(shopId, name).subscribe(
      data => {
        console.log('Brand updated successfully');
      },
      error => {
        console.error('Error updating brand:', error);
      }
    );
  }
}