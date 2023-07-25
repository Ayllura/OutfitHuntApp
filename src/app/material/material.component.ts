import { Component, OnInit } from '@angular/core';
import { MaterialService } from './material.service';
import { Materials } from './material';
import { NgForm, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})
export class MaterialComponent {
  materialId = "0";
  description = ""
  materialList: Materials[] = [] ;
  
  constructor(private service: MaterialService) {
  }
  ngOnInit(): void {
    this.service.getAllMaterial().subscribe(data => {
      this.materialList = data;
      });
  }
  createNewMaterial(form: NgForm) {
  let material = {
  materialId: form.value.materialId,
  description: form.value.description
  };
  this.service.createMaterial(material).subscribe(data => {
  console.log(data);
  });
}
}
