import { BrandsService } from '../brands.service';
import { Brands } from '../brands';
import { Component, OnInit } from '@angular/core';
import { NgForm, FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-create-brand',
  templateUrl: './create-brand.component.html',
  styleUrls: ['./create-brand.component.css']
})
export class CreateBrandComponent implements OnInit {
  brandId = "0";
  name = "";

  constructor(private service: BrandsService) {

  }

  ngOnInit(): void {

  }


  createNewBrand(form: NgForm) {
    let brand = {
      brandId: form.value.brandId,
      name: form.value.name,
    };
    this.service.createBrand(brand).subscribe(data => {
      console.log('Produto adicionado com sucesso:', data);
    });

  }
}