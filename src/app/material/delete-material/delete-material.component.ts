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
    // Get the materialId to delete from the route parameter
    this.route.params.subscribe(params => {
      this.materialIdToDelete = +params['id'];

      // Fetch the material to delete based on the materialId
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

  // Function to confirm the deletion of the material
  confirmDelete() {
    // Check if the materialId to delete is valid
    if (!this.materialIdToDelete) {
      console.log('Invalid materialIdToDelete.');
      return;
    }

    // Call the service to delete the material, subscribe to the response
    this.materialService.deleteMaterial(this.materialIdToDelete).subscribe(
      () => {
        console.log(`Material with ID ${this.materialIdToDelete} deleted successfully.`);
        // Navigate back to the 'material' route after successful deletion
        this.router.navigate(['/material']);
      },
      (error) => {
        console.error('Error deleting material:', error);
      }
    );
  }

  // Function to cancel the deletion and navigate back to the 'material' route
  cancelDelete() {
    this.router.navigate(['/material']);
  }
}