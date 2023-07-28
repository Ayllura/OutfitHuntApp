import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MaterialService } from '../material.service';
import { Materials } from '../material';


@Component({
  selector: 'app-delete-material',
  templateUrl: './delete-material.component.html',
  styleUrls: ['./delete-material.component.css']
})
export class DeleteMaterialComponent implements OnInit {
  materialIdToDelete: number | undefined;
  materialToDelete: Materials | undefined;

  constructor(private route: ActivatedRoute, private router: Router, private materialService: MaterialService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.materialIdToDelete = +params['id'];

      this.materialService.getMaterial(this.materialIdToDelete).subscribe(
        (material) => {
          this.materialToDelete = material;
        },
        (error) => {
          console.error('Error fetching material:', error);
        }
      );
    });
  }

  confirmDelete() {
    if (!this.materialIdToDelete) {
      console.log('Invalid materialIdToDelete.');
      return;
    }

    this.materialService.deleteMaterial(this.materialIdToDelete).subscribe(
      () => {
        alert(`Material with ID ${this.materialIdToDelete} deleted successfully.`);
        this.router.navigate(['/material']);
      },
      (error) => {
        console.error('Error deleting material:', error);
      }
    );
  }

  cancelDelete() {
    this.router.navigate(['/material']);
  }
}