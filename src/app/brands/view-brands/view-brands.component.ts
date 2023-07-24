import { Component, OnInit } from '@angular/core';
import { BrandsService } from '../brands.service';
import { Brands } from '../brands';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-brands',
  templateUrl: './view-brands.component.html',
  styleUrls: ['./view-brands.component.css']
})
export class ViewBrandsComponent implements OnInit{
  
  brandId = "0";
  name = "";
  constructor(private activateRoute: ActivatedRoute, private service: ProductsService){
    
  }
  
  ngOnInit(): void {
    this.activateRoute.params.subscribe(data => {
      this.brandId = data['id'];
    });

    this.service.getProduct(this.brandId).subscribe(data => {
      this.brandId = data['BrandId'];
      this.name = data['Name'];
    });

  }
  getProduct(){ 
  }
}