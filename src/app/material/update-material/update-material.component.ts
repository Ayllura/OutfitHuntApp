import { Component, OnInit } from '@angular/core';
import { MaterialService } from '../material.service';
import { Materials } from '../material';
import { FormGroup, NgForm, FormControl } from '@angular/forms';

@Component({
  selector: 'app-update-material',
  templateUrl: './update-material.component.html',
  styleUrls: ['./update-material.component.css']
})
export class UpdateMaterialComponent implements OnInit {
  materialForm: FormGroup = new FormGroup({
    materialId: new FormControl(''),
    description: new FormControl('')
  });

  constructor(private service: MaterialService) { }

  ngOnInit(): void {
    this.materialForm = new FormGroup({
      materialId: new FormControl(''), 
      description: new FormControl('') 
    });
  }
  updateMaterial() {
    let material = {
      materialId: this.materialForm.value.materialId,
      description: this.materialForm.value.description
    };
    const existingMaterialId = this.materialForm.value.materialId;
    this.service.updateMaterial(existingMaterialId, material).subscribe(data => {
      console.log("Material atualizado:", data);
    });
  }
}
