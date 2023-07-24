import { Component, OnInit } from '@angular/core';
import { BrandsService } from '../brands.service';
import { Brands } from '../brands';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-brands',
  templateUrl: './view-brands.component.html',
  styleUrls: ['./view-brands.component.css']
})
export class ViewBrandsComponent implements OnInit {
  brandId: number = 0;
  name: string = "";

  searchId: number | undefined;

  constructor(private activateRoute: ActivatedRoute, private service: BrandsService) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(params => {
      this.searchId = +params['id']; // Convert the string ID to a number using the "+" operator
      if (this.searchId !== undefined) {
        this.brandId = this.searchId;
        this.getBrand(); // Corrected method name
      }
    });
  }

  searchById(): void {
    if (this.searchId !== undefined) {
      this.brandId = this.searchId;
      this.getBrand(); // Corrected method name
    }
  }

  getBrand(): void {
    if (this.brandId) {
      this.service.getBrands(this.brandId).subscribe(data => {
        this.name = data['name'];
      });
    }
  }
}