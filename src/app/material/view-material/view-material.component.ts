import { Component, OnInit } from '@angular/core';
import { MaterialService } from '../material.service';
import { Material } from '../material';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-material',
  templateUrl: './view-material.component.html',
  styleUrls: ['./view-material.component.css']
})
export class ViewMaterialComponent implements OnInit {
  productId = "0";
  productName = "";
  familyId = "";
  ean13code = "";
  obs = ""
  constructor(private activateRoute: ActivatedRoute, private service: ProductsService){
  }
  ngOnInit(): void {
  this.activateRoute.params.subscribe(data => {
  this.productId = data['id'];
  });
  this.service.getProduct(this.productId).subscribe(data => {
    this.productId = data['productId'];
this.productName = data['productName'];
this.familyId = data['familyId'];
this.ean13code = data['ean13code'];
this.obs = data['obs'];
});
}
getProduct(){
}
}
