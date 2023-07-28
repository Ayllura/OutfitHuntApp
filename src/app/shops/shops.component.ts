import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ShopsService } from './shops.service';
import { Shops } from './shops';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-shops',
  templateUrl: './shops.component.html',
  styleUrls: ['./shops.component.css']
})
export class ShopsComponent implements OnInit {
  shopList: Shops[] = [];
  filteredShopList: Shops[] = [];
  newShop: Shops = { shopId: 0, name: '', link: '' } // Create an instance of the Shops class for creating new shops
  updateShopForm: FormGroup;
  shopId: number = 0;
  searchForm: FormGroup;

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

    this.searchForm = this.fb.group({
      name: ['', Validators.required]
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

  createNewShop(): void {
    if (this.newShop.shopId <= 0 || this.newShop.name === '' || this.newShop.link === '') {
      alert('Shop ID must be greater than 0, and Name and Link cannot be empty.');
      return;
    }

    const newName = this.newShop.name;
    const newLink = this.newShop.link;

    const existingShopWithSameName = this.shopList.find(shop => shop.name === newName && shop.shopId !== this.newShop.shopId);
    const existingShopWithSameLink = this.shopList.find(shop => shop.link === newLink && shop.shopId !== this.newShop.shopId);

    if (existingShopWithSameName || existingShopWithSameLink) {
      alert('A shop with the same Name or Link already exists. Please choose different Name or Link.');
      return;
    }

    this.service.createShop(this.newShop).subscribe(data => {
      this.shopList.push(data);
      this.newShop = { shopId: 0, name: '', link: '' };
      alert('Shop created successfully.');
    });
  }


  updateShop() {
    if (this.updateShopForm.invalid) {
      alert('Invalid form data. Please fill all required fields.');
      return;
    }

    const shopId = this.updateShopForm.value.shopId;
    if (isNaN(shopId)) {
      alert('Invalid shopId: ' + shopId);
      return;
    }

    const newName = this.updateShopForm.value.name;
    const newLink = this.updateShopForm.value.link;

    const existingShop = this.shopList.find(shop => (shop.name === newName || shop.link === newLink) && shop.shopId !== shopId);
    if (existingShop) {
      alert('A shop with the same Name or Link already exists. Please choose different Name or Link.');
      return;
    }

    const shop: Shops = {
      shopId: shopId,
      name: newName,
      link: newLink
    };

    this.service.updateShop(shopId, shop).subscribe(
      data => {
        alert('Shop updated successfully');
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate(['/shops']);
        });
      },
      error => {
        alert('Error updating shop.');
      }
    );
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
  // Add a new method for searching by name
  searchByName(): void {
    if (this.searchForm.invalid) {
      alert('Invalid search form data. Please enter a name to search.');
      return;
    }

    const nameToSearch = this.searchForm.get('name')?.value;
    // Filter the shopList based on the name input
    this.filteredShopList = this.shopList.filter(
      shop => shop.name.toLowerCase().includes(nameToSearch.toLowerCase())
    );

    // Check if there are no results
    if (this.filteredShopList.length === 0) {
      alert('No shops found for the entered name.');
    }
  }

  resetSearch(): void {
    this.searchForm.reset();
    // Reset the filteredShopList to show all shops again
    this.filteredShopList = [...this.shopList];
  }
}