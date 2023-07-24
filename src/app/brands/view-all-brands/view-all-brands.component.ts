import { Component, OnInit } from '@angular/core';
import { BrandsService } from '../brands.service';
import { Brands } from '../brands';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-view-all-brands',
  templateUrl: './view-all-brands.component.html',
  styleUrls: ['./view-all-brands.component.css']
})
export class ViewAllBrandsComponent implements OnInit {
  brandList: Brands[] = [] ;
  constructor(private service: BrandsService){
    
  }
  ngOnInit(): void {
    this.service.getAllBrands().subscribe(data => {
        this.brandList = data;
      });
  }
}