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

  createNewMaterial(form: NgForm) {
    const parsedMaterialId = parseInt(form.value.materialId, 10);
    if (parsedMaterialId <= 0 || isNaN(parsedMaterialId)) {
      alert('Material ID must be greater than 0 and cannot be empty.');
      return;
    }
  
    // Fetch all existing materials to perform the validations
    this.service.getAllMaterial().subscribe(
      materials => {

        if (materials.some(material => material.materialId === parsedMaterialId)) {
          alert('Material ID already exists.');
          return;
        }

        const trimmedDescription = form.value.description.trim();
        if (trimmedDescription.length === 0) {
          alert('Description cannot be empty.');
          return;
        }
  
        if (materials.some(material => material.description === form.value.description)) {
          alert('Description already exists.');
          return;
        }
  
        let material = {
          materialId: form.value.materialId,
          description: form.value.description
        };
  
        this.service.createMaterial(material).subscribe(
          data => {
            console.log(data);
            this.showSuccessPopup = true;
            setTimeout(() => {
              this.showSuccessPopup = false;
            }, 3000);
          },
          error => {
            console.error(error);
          }
        );
      },
      error => {
        console.error(error);
      }
    );
  }

  closeSuccessPopup() {
    this.showSuccessPopup = false;
  }

  backHome() {
    this.router.navigate(['/material']);
  }
}