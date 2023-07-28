import { Component, OnInit } from '@angular/core';
import { MaterialService } from './material.service';
import { Materials } from './material';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css'],
})
export class MaterialComponent implements OnInit {
  materialList: Materials[] = [];
  selectedMaterial: Materials | null = null;

  constructor(private service: MaterialService) { }

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

  onMaterialSelect(material: Materials): void {
    this.selectedMaterial = material;
  }

  clearSelectedMaterial() {
    this.selectedMaterial = null;
  }
}
