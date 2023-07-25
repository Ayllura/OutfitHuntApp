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
      this.materialIdToDelete = +params['id']; // Assuming the route parameter is named 'id'

      // Fetch the material details using the materialIdToDelete
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

    // Perform the delete action here using the materialIdToDelete
    this.materialService.deleteMaterial(this.materialIdToDelete).subscribe(
      () => {
        console.log(`Material with ID ${this.materialIdToDelete} deleted successfully.`);
        // After successful deletion, you can navigate back to the material list page
        this.router.navigate(['/material']);
      },
      (error) => {
        console.error('Error deleting material:', error);
        // Handle any errors that may occur during deletion
      }
    );
  }

  cancelDelete() {
    // If the user cancels the delete action, you can navigate back to the material list page
    this.router.navigate(['/material']);
  }
}