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
  newShop: Shops = { shopId: 0, name: '', link: '' } // Create an instance of the Shops class for creating new shops
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


// Add a class-level variable to store the last clicked shopId
private lastClickedShopId: number | null = null;

deleteShop(shopId: number): void {
  if (this.lastClickedShopId === shopId) {
    // If the user clicked the same delete button twice, show a warning alert
    if (confirm('Are you sure you want to delete this Shop? Press OK to confirm.')) {
      // Proceed with shop deletion if the user confirmed
      this.service.deleteShop(shopId).subscribe(
        () => {
          alert('Shop deleted successfully');
          this.shopList = this.shopList.filter(shop => shop.shopId !== shopId);
          // Reset the lastClickedShopId to null for the next deletion
          this.lastClickedShopId = null;
        },
        error => {
          alert('Error deleting Shop.');
          // Reset the lastClickedShopId in case of an error to allow reconfirmation
          this.lastClickedShopId = null;
        }
      );
    } else {
      // If the user cancels the deletion, reset the lastClickedShopId
      this.lastClickedShopId = null;
    }
  } else {
    // If the user clicked a different delete button, set the lastClickedShopId to the current shopId
    this.lastClickedShopId = shopId;
    if (confirm('Are you sure you want to delete this Shop?')) {
      return;
    }
  }
}

createNewShop(): void {
    if (this.newShop.shopId <= 0 || this.newShop.name === '' || this.newShop.link === '') {
      // Show an alert if brandId is invalid or name is empty
      alert('Shop ID must be greater than 0 and Name and Link cannot be empty.');
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
      alert('Invalid shopId:'+ shopId);
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
        alert('Error updating shop.');
      }
    );
  }
}