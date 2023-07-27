import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MaterialService } from '../material.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-material',
  templateUrl: './create-material.component.html',
  styleUrls: ['./create-material.component.css']
})
export class CreateMaterialComponent {
  materialId: number | null = null;
  description = "";
  showSuccessPopup = false;

  constructor(private service: MaterialService, private router: Router, private snackBar: MatSnackBar) {
  }

  // Function to create a new material based on the form input
  createNewMaterial(form: NgForm) {
    // Parse materialId to an integer
    const parsedMaterialId = parseInt(form.value.materialId, 10);

    // Check if the parsed materialId is valid (not zero and a valid number)
    if (parsedMaterialId === 0 || isNaN(parsedMaterialId)) {
      console.error("Invalid materialId");
      return;
    }

    // Create an object representing the material
    let material = {
      materialId: form.value.materialId,
      description: form.value.description
    };

    // Call the service to create the material, subscribe to the response
    this.service.createMaterial(material).subscribe(
      data => {
        console.log(data);
        // Show success popup and hide it after 3 seconds
        this.showSuccessPopup = true;
        setTimeout(() => {
          this.showSuccessPopup = false;
        }, 3000);

      },
      error => {
        console.error(error);
      }
    );
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