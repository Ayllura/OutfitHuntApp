import { Component, OnInit } from '@angular/core';
import { MaterialService } from '../material.service';
import { Materials } from '../material';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-material',
  templateUrl: './create-material.component.html',
  styleUrls: ['./create-material.component.css']
})
export class CreateMaterialComponent implements OnInit {
  materialId = "0";
  description = ""
  
  constructor(private service: MaterialService) {
  }
  ngOnInit(): void {
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
