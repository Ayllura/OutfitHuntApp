import { Component, OnInit } from '@angular/core';
import { MaterialService } from './material.service';
import { Materials } from './material';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css'],
})
export class MaterialComponent implements OnInit {
  materialList: Materials[] = [];
  selectedMaterial: Materials | null = null;

  constructor(private service: MaterialService) {}

  ngOnInit(): void {
    this.getMaterials();
  }

  getMaterials(): void {
    this.service.getAllMaterial().subscribe(
      (data) => {
        this.materialList = data;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  createNewMaterial(form: NgForm) {
    let material = {
      materialId: form.value.materialId,
      description: form.value.description
    };
    this.service.createMaterial(material).subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  onMaterialSelect(material: Materials): void {
    this.selectedMaterial = material;
  }

  clearSelectedMaterial() {
    this.selectedMaterial = null;
  }
}
