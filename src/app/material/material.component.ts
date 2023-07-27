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
  materialList: Materials[] = []; // Array to store the list of materials
  selectedMaterial: Materials | null = null;  // Holds the currently selected material (if any)

  constructor(private service: MaterialService) { }

  ngOnInit(): void {
    // Load the materials when the component is initialized
    this.getMaterials();
  }

  // Function to fetch all materials from the service
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

  // Function to handle when a material is selected from the list
  onMaterialSelect(material: Materials): void {
    this.selectedMaterial = material;
  }

  // Function to clear the currently selected material
  clearSelectedMaterial() {
    this.selectedMaterial = null;
  }
}
