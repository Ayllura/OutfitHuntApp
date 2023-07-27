import { Component, OnInit } from '@angular/core';
import { MaterialService } from '../material.service';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-update-material',
  templateUrl: './update-material.component.html',
  styleUrls: ['./update-material.component.css']
})
export class UpdateMaterialComponent implements OnInit {
  materialForm: FormGroup;
  showSuccessPopup = false;

  constructor(private service: MaterialService, private route: ActivatedRoute, private router: Router, private snackBar: MatSnackBar) {
    // Initialize the form group with the form controls
    this.materialForm = new FormGroup({
      materialId: new FormControl(''),
      description: new FormControl('')
    });
  }

  ngOnInit(): void {
    // Get the 'id' parameter from the route and fetch the material based on it
    this.route.params.subscribe((params: Params) => {
      const materialId = +params['id'];
      // Fetch material data and populate the form with the retrieved values
      this.service.getMaterial(materialId).subscribe(material => {
        this.materialForm.patchValue({
          materialId: material.materialId,
          description: material.description
        });
      });
    });
  }

  // Function to update the material details
  updateMaterial() {
    // Get the materialId and new description from the form
    const materialId = this.materialForm.value.materialId;
    const newDescription = this.materialForm.value.description;

    // Create the payload to update the material
    const materialPayload = {
      materialId: materialId,
      description: newDescription
    };

    // Call the service to update the material description, subscribe to the response
    this.service.updateMaterialDescription(materialId, materialPayload).subscribe(data => {
      console.log("Material updated:", data);
      // Show success popup and hide it after 3 seconds
      this.showSuccessPopup = true;
      setTimeout(() => {
        this.showSuccessPopup = false;
      }, 3000);
    });
  }

  // Function to close the success popup
  closeSuccessPopup() {
    this.showSuccessPopup = false;
  }

  // Function to navigate back to the 'material' route
  backHome() {
    this.router.navigate(['/material']);
  }
}
