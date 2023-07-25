import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Shops } from '../shops';
import { ShopsService } from '../shops.service';

@Component({
  selector: 'app-view-all-shops',
  templateUrl: './view-all-shop.component.html',
  styleUrls: ['./view-all-shop.component.css']
})
export class ViewAllShopsComponent implements OnInit {
  shopList: Shops[] = [];
  newShop: Shops = { shopId: 0, name: '', link: '' };
  updateShopForm: FormGroup;

  constructor(
    private activateRoute: ActivatedRoute,
    private service: ShopsService,
    private fb: FormBuilder
  ) {
    this.updateShopForm = this.fb.group({
      shopId: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      name: ['', Validators.required],
      link: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.getShopList();
  }

  getShopList(): void {
    this.service.getAllShops().subscribe(data => {
      this.shopList = data;
    });
  }

  createNewShop(): void {
    if (this.newShop.shopId === 0 || this.newShop.name === '' || this.newShop.link === '') {
      return;
    }

    this.service.createShop(this.newShop).subscribe(data => {
      this.shopList.push(data);
      this.newShop = { shopId: 0, name: '', link: '' };
    });
  }

  updateShop(): void {
    if (this.updateShopForm.invalid) {
      return;
    }

    const shopId = this.updateShopForm.value.shopId;
    if (isNaN(shopId)) {
      console.error('Invalid shopId:', shopId);
      return;
    }

    const shop: Shops = {
      shopId: shopId,
      name: this.updateShopForm.value.name,
      link: this.updateShopForm.value.link
    };

    this.service.updateShop(shopId, shop).subscribe(
      data => {
        console.log('Shop updated successfully');
      },
      error => {
        console.error('Error updating shop:', error);
      }
    );
  }

  deleteShop(shopId: number): void {
    this.service.deleteShop(shopId).subscribe(() => {
      console.log('Shop deleted successfully');
      this.shopList = this.shopList.filter(shop => shop.shopId !== shopId);
    }, error => {
      console.error('Error deleting shop:', error);
    });
  }
}
