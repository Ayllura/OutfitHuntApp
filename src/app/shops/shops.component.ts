import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ShopsService } from './shops.service';
import { Shops } from './shops';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-shops',
  templateUrl: './shops.component.html',
  styleUrls: ['./shops.component.css']
})
export class ShopsComponent implements OnInit {
  shopList: Shops[] = [];
  newShop: Shops = {shopId:0, name:'', link: ''} // Create an instance of the Shops class for creating new shops
  updateShopForm: FormGroup;
  shopId: number = 0;

  constructor(
    private service: ShopsService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.updateShopForm = this.fb.group({
      shopId: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      name: ['', Validators.required],
      link: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // Implement the logic to fetch the list of shops and populate 'shopList' here
    this.getShopList();
  }

  getShopList(): void {
    this.service.getAllShops().subscribe(data => {
      this.shopList = data;
    });
  }

  deleteShop(shopId: number): void {
    this.service.deleteShop(shopId).subscribe(() => {
      console.log('Shop deleted successfully');
      this.shopList = this.shopList.filter(shop => shop.shopId !== shopId);
    }, error => {
      console.error('Error deleting brand:', error);
    });
  }

  createNewShop(): void {
    if (this.newShop.shopId === 0 || this.newShop.name === ''||this.newShop.link === '') {
      return;
    }

    this.service.createShop(this.newShop).subscribe(data => {
      this.shopList.push(data);
      this.newShop = { shopId: 0, name: '', link: '' };
    });
  }

  updateShop() {
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
        console.log('Brand updated successfully');
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate(['/shops']);
        });
      },
      error => {
        console.error('Error updating shop:', error);
      }
    );
  }
}