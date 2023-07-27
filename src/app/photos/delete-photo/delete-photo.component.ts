import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../photos.service';
import { Photos } from '../photos';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete-photo',
  templateUrl: './delete-photo.component.html',
  styleUrls: ['./delete-photo.component.css']
})
export class DeletePhotoComponent implements OnInit {
  photoIdToDelete: number | undefined;
  photoToDelete: Photos | undefined;

  constructor(private route: ActivatedRoute, private router: Router, private service: PhotosService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.photoIdToDelete = +params['id'];

      this.service.getPhoto(this.photoIdToDelete).subscribe(
        (photo) => {
          this.photoToDelete = photo;
        },
        (error) => {
          console.error('Error fetching photo: ', error);
        }
      );
    });
  }

  confirmDelete() {
    if (this.photoIdToDelete == undefined) {
      console.log('Invalid photoIdToDelete.');
      return;
    }

    // Perform the delete action here using the photoIdToDelete
    this.service.deletePhoto(this.photoIdToDelete).subscribe(
      () => {
        console.log('Photo with ID '+ (this.photoIdToDelete) +' deleted successfully.');
        // After successful deletion, you can navigate back to the photo list page
        this.router.navigate(['/photos']);
      },
      (error) => {
        console.error('Error deleting photo: ', error);
        // Handle any errors that may occur during deletion
      }
    );
  }
}