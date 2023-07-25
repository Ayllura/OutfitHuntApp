import { Component, OnInit } from '@angular/core';
import { MaterialService } from '../material.service';
import { Materials } from '../material';
import { FormGroup, NgForm, FormControl } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-update-material',
  templateUrl: './update-material.component.html',
  styleUrls: ['./update-material.component.css']
})
export class UpdateMaterialComponent implements OnInit {
  materialForm: FormGroup;

  constructor(private service: MaterialService, private route: ActivatedRoute) {
    this.materialForm = new FormGroup({
      materialId: new FormControl(''),
      description: new FormControl('')
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const materialId = +params['id']; // Assuming you have a route parameter named 'id'
      this.service.getMaterial(materialId).subscribe(material => {
        this.materialForm.patchValue({
          materialId: material.materialId,
          description: material.description
        });
      });
    });
  }

  updateMaterial() {
    const materialId = this.materialForm.value.materialId; // Get the materialId from the form
    const newDescription = this.materialForm.value.description; // Get the updated description from the form

    // Create the request payload with both materialId and description
    const materialPayload = {
      materialId: materialId,
      description: newDescription
    };

    // Send the PUT request to update the material
    this.service.updateMaterialDescription(materialId, materialPayload).subscribe(data => {
      console.log("Material updated:", data);
    });
  }
}
