import { Component, Input, ViewChild } from '@angular/core';
import { MaterialService } from './material.service';
import { Materials } from './material';
import { NgForm, FormsModule } from '@angular/forms';
import { NgbDropdown } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-material, ngbd-dropdown-basic',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})
export class MaterialComponent {
  materialId = "0";
  description = ""
  
  
  showAllMaterials: boolean = true;
  @Input() materialList: Materials[] = [];
  selectedMaterial: Materials | null = null;
  @ViewChild(NgbDropdown) dropdown!: NgbDropdown;
  
  constructor(private service: MaterialService) {
  }
  ngOnInit(): void {
    this.service.getAllMaterial().subscribe(data => {
      this.materialList = data;
      });
  }

  onMaterialSelect(material: Materials | null): void {
    this.selectedMaterial = material;
    this.dropdown.close(); // Close the dropdown when a material is selected
  }

  onShowAllMaterials(): void {
    this.showAllMaterials = true;
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
