import { Component, OnInit } from '@angular/core';
import { ColoursService } from '../colours.service';
import { Colours } from '../colours';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete-colour',
  templateUrl: './delete-colour.component.html',
  styleUrls: ['./delete-colour.component.css']
})
export class DeleteColourComponent implements OnInit {
  colourIdToDelete: number | undefined;
  colourToDelete: Colours | undefined;

  constructor(private route: ActivatedRoute, private router: Router, private service: ColoursService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.colourIdToDelete = +params['id']; ;

      this.service.getColour(this.colourIdToDelete).subscribe(
        (colour) => {
          this.colourToDelete = colour;
        },
        (error) => {
          console.error('Error fetching material: ', error);
        }
      );
    });
  }

  confirmDelete() {
    if (this.colourIdToDelete == undefined) {
      console.log('Invalid colourIdToDelete.');
      return;
    }

    // Perform the delete action here using the colourIdToDelete
    this.service.deleteColour(this.colourIdToDelete).subscribe(
      () => {
        console.log('Colour with ID '+ (this.colourIdToDelete) +' deleted successfully.');
        // After successful deletion, you can navigate back to the material list page
        this.router.navigate(['/colours']);
      },
      (error) => {
        console.error('Error deleting colour: ', error);
        // Handle any errors that may occur during deletion
      }
    );
  }

  cancelDelete() {
    // If the user cancels the delete action, you can navigate back to the material list page
    this.router.navigate(['/colours']);
  }




}