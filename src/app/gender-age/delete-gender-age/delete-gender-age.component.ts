import { Component, OnInit } from '@angular/core';
import { GenderAgeService } from '../gender-age.service';
import { GenderAge } from '../gender-age';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete-gender-age',
  templateUrl: './delete-gender-age.component.html',
  styleUrls: ['./delete-gender-age.component.css']
})
export class DeleteGenderAgeComponent implements OnInit {
  genderAgeIdToDelete: number | undefined;
  genderAgeToDelete: GenderAge | undefined;

  constructor(private route: ActivatedRoute, private router: Router, private service: GenderAgeService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.genderAgeIdToDelete = +params['id']; ;

      this.service.getGenderAge(this.genderAgeIdToDelete).subscribe((genderAge) => {
          this.genderAgeToDelete= genderAge;
        },
        (error) => {console.error('Error fetching genderAge: ', error);
        }
      );
    });
  }

  confirmDelete() {
    if (this.genderAgeIdToDelete == undefined) {
      console.log('Invalid genderAgeIdToDelete.');
      return;
    }

    // Perform the delete action here using the genderAgeIdToDelete

    this.service.deleteGenderAge(this.genderAgeIdToDelete).subscribe(
      () => {
        console.log('Colour with ID '+ (this.genderAgeIdToDelete) +' deleted successfully.');
        // After successful deletion, you can navigate back to the material list page
        this.router.navigate(['/genderAge']);
      },
      (error) => {
        console.error('Error deleting genderAge: ', error);
        // Handle any errors that may occur during deletion
      }
    );
  }
}