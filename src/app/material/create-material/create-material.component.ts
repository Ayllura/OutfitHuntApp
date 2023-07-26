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

    if (parsedMaterialId === 0 || isNaN(parsedMaterialId)) {
      console.error("Invalid materialId");
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
  }

  closeSuccessPopup() {
    this.showSuccessPopup = false;
  }

  backHome() {
    this.router.navigate(['/material']);
  }
}