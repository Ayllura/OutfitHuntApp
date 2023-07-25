import { ShopsService } from '../shops.service';
import { Shops } from '../shops';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-view-shops',
  templateUrl: './view-shop.component.html',
  styleUrls: ['./view-shop.component.css']
})
export class ViewShopsComponent implements OnInit {
  shopId = 0;
  name = "";
  link = "";
  constructor(private activateRoute: ActivatedRoute, private service: ShopsService) {
  }
  ngOnInit(): void {
    this.activateRoute.params.subscribe(data => {
      this.shopId = data['id'];
    });
    this.service.getShops(this.shopId).subscribe(data => {
      this.shopId = data['shopId'];
      this.name = data['name'];
      this.link = data['link']
    });
  }
  getShops() {
  }
}