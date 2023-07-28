// Import required modules and classes
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
  shopList: Shops[] = []; // An array to store the list of all shops
  filteredShopList: Shops[] = []; // An array to store the filtered shops based on search criteria
  newShop: Shops = { shopId: 0, name: '', link: '' }; // Create an instance of the Shops class for creating new shops
  updateShopForm: FormGroup; // Form group for updating shop details
  searchForm: FormGroup; // Form group for searching shops by name

  constructor(
    private service: ShopsService, // Injecting the ShopsService to interact with the backend
    private fb: FormBuilder, // Injecting FormBuilder for creating form groups
    private router: Router // Injecting the Router to perform navigation
  ) {
    // Setting up the updateShopForm with form controls and validation rules
    this.updateShopForm = this.fb.group({
      shopId: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      name: ['', Validators.required],
      link: ['', Validators.required]
    });

    // Setting up the searchForm with form controls and validation rules
    this.searchForm = this.fb.group({
      name: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // Lifecycle hook: Called after the component is constructed.
    // Implement the logic to fetch the list of shops and populate 'shopList' here
    this.getShopList();
  }

  getShopList(): void {
    // Method to fetch the list of all shops from the backend using the ShopsService
    this.service.getAllShops().subscribe(data => {
      this.shopList = data;
      this.filteredShopList = [...this.shopList]; // Initializing the filteredShopList with the same data initially
    });
  }

  createNewShop(): void {
    // Method to create a new shop with input validation and duplicate checks

    // Checking if the new shop's ID, name, and link are valid
    if (this.newShop.shopId <= 0 || this.newShop.name === '' || this.newShop.link === '') {
      alert('Shop ID must be greater than 0, and Name and Link cannot be empty.');
      return;
    }

    // Extracting the new shop's name and link for duplicate checks
    const newName = this.newShop.name;
    const newLink = this.newShop.link;

    // Checking if a shop with the same name or link already exists (excluding the current shop being created)
    const existingShopWithSameName = this.shopList.find(shop => shop.name === newName || shop.shopId !== this.newShop.shopId);
    const existingShopWithSameLink = this.shopList.find(shop => shop.link === newLink || shop.shopId !== this.newShop.shopId);

    if (existingShopWithSameName || existingShopWithSameLink) {
      alert('A shop with the same Name or Link already exists. Please choose a different Name or Link.');
      return;
    }

    // Creating the new shop using the ShopsService and adding it to the shopList
    this.service.createShop(this.newShop).subscribe(data => {
      this.shopList.push(data);
      this.newShop = { shopId: 0, name: '', link: '' }; // Resetting the newShop object for the next creation
      alert('Shop created successfully.');
    });
  }


  updateShop() {
    // Method to update an existing shop with input validation and duplicate checks

    // Checking if the updateShopForm data is valid
    if (this.updateShopForm.invalid) {
      alert('Invalid form data. Please fill all required fields.');
      return;
    }

    // Extracting the updated shop's ID, name, and link from the form
    const shopId = this.updateShopForm.value.shopId;
    if (isNaN(shopId)) {
      alert('Invalid shopId: ' + shopId);
      return;
    }

    const newName = this.updateShopForm.value.name;
    const newLink = this.updateShopForm.value.link;

    // Checking if a shop with the same name or link already exists (excluding the current shop being updated)
    const existingShop = this.shopList.find(shop => (shop.name === newName || shop.link === newLink) && shop.shopId !== shopId);
    if (existingShop) {
      alert('A shop with the same Name or Link already exists. Please choose a different Name or Link.');
      return;
    }

    // Creating a new 'Shops' object with the updated details
    const shop: Shops = {
      shopId: shopId,
      name: newName,
      link: newLink
    };

    // Updating the shop using the ShopsService
    this.service.updateShop(shopId, shop).subscribe(
      data => {
        alert('Shop updated successfully');
        // Navigating back to the shops list after successful update
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate(['/shops']);
        });
      },
      error => {
        alert('Error updating shop.');
      }
    );
  }

  // A class-level variable to store the ID of the last clicked shop (used during shop deletion)
  private lastClickedShopId: number | null = null;

  deleteShop(shopId: number): void {
    // Method to delete a shop with a confirmation check

    if (this.lastClickedShopId === shopId) {
      // If the user clicked the same delete button twice, show a warning alert
      if (confirm('Are you sure you want to delete this Shop? Press OK to confirm.')) {
        // Proceed with shop deletion if the user confirmed
        this.service.deleteShop(shopId).subscribe(
          () => {
            alert('Shop deleted successfully');
            // Removing the deleted shop from the shopList and updating the view
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

  searchByName(): void {
    // Method to search for shops by name and display the results.

    // Checking if the searchForm data is valid
    if (this.searchForm.invalid) {
      alert('Invalid search form data. Please enter a name to search.');
      return;
    }

    // Extracting the name to search from the searchForm
    const nameToSearch = this.searchForm.value.name;

    // Filtering the shopList based on the name input and updating the filteredShopList
    this.filteredShopList = this.shopList.filter(
      shop => shop.name.toLowerCase().trim().includes(nameToSearch.toLowerCase().trim())
    );

    // Check if there are no results after filtering
    if (this.filteredShopList.length === 0) {
      alert('No shops found for the entered name.');
    }
  }

  resetSearch(): void {
    // Method to reset the search and show all shops again

    // Resetting the search form
    this.searchForm.reset();

    // Resetting the filteredShopList to display all shops again
    this.filteredShopList = [...this.shopList];
  }
}