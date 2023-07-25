import { BrandsService } from '../brands.service';
import { Brands } from '../brands';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-view-brands',
  templateUrl: './view-brands.component.html',
  styleUrls: ['./view-brands.component.css']
})
export class ViewBrandsComponent implements OnInit {
  brandId = 0;
  name = ""
  constructor(private activateRoute: ActivatedRoute, private service: BrandsService) {
  }
  ngOnInit(): void {
    this.activateRoute.params.subscribe(data => {
      this.brandId = data['id'];
    });
    this.service.getBrands(this.brandId).subscribe(data => {
      this.brandId = data['brandId'];
      this.name = data['name'];
    });
  }
  getBrands() {
  }
}
