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
      this.searchId = +params['id'];
      if (this.searchId !== undefined) {
        this.brandId = this.searchId;
        this.getBrand();
      }
    });
  }

  searchById(): void {
    if (this.searchId !== undefined) {
      this.brandId = this.searchId;
      this.getBrand();
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