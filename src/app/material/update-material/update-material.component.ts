import { Component, OnInit } from '@angular/core';
import { MaterialService } from '../material.service';
import { Materials } from '../material';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-update-material',
  templateUrl: './update-material.component.html',
  styleUrls: ['./update-material.component.css']
})
export class UpdateMaterialComponent implements OnInit {

  constructor(private service: MaterialService) {
  }
  ngOnInit(): void {
  }
  updateMaterial(form: NgForm) {
    let material = {
      materialId: form.value.materialId,
      description: form.value.description
    };
    const existingMaterialId = form.value.materialId;
    this.service.updateMaterial(existingMaterialId, material).subscribe(data => {
      console.log("Material atualizado:", data);
    });
  }
}
