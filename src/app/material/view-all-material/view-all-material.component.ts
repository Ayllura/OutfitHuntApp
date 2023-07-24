import { Component, OnInit } from '@angular/core';
import { MaterialService } from '../material.service';
import { Material } from '../material';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-view-all-material',
  templateUrl: './view-all-material.component.html',
  styleUrls: ['./view-all-material.component.css']
})
export class ViewAllMaterialComponent implements OnInit {
  productList: Product[] = [] ;
  constructor(private service: ProductsService){
  }
  ngOnInit(): void {
  this.service.getAllProduct().subscribe(data => {
  this.productList = data;
  });
  }
}
