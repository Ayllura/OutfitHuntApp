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
    this.materialForm = new FormGroup({
      materialId: new FormControl(''),
      description: new FormControl('')
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const materialId = +params['id'];

      this.service.getMaterial(materialId).subscribe(material => {
        this.materialForm.patchValue({
          materialId: material.materialId,
          description: material.description
        });
      });
    });
  }

  updateMaterial() {
    const materialId = this.materialForm.value.materialId;
    const newDescription = this.materialForm.value.description.trim();

    if (newDescription.length === 0) {
      alert('Description cannot be empty.');
      return;
    }
  
    this.service.getAllMaterial().subscribe(
      materials => {
        if (materials.some(material => material.description === newDescription && material.materialId !== materialId)) {
          alert('Description already exists.');
          return;
        }
  
        const materialPayload = {
          materialId: materialId,
          description: newDescription
        };
  
        this.service.updateMaterialDescription(materialId, materialPayload).subscribe(data => {
          console.log("Material updated:", data);
          this.showSuccessPopup = true;
          setTimeout(() => {
            this.showSuccessPopup = false;
          }, 3000);
        });
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
