import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../photos.service';
import { Photos } from '../photos';
import { FormGroup, NgForm, FormControl } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-update-photo',
  templateUrl: './update-photo.component.html',
  styleUrls: ['./update-photo.component.css']
})
export class UpdatePhotoComponent implements OnInit {
  photosForm: FormGroup;

  constructor(private service: PhotosService, private route: ActivatedRoute, private router: Router) {
    this.photosForm = new FormGroup({
      photoId: new FormControl('photoId'),
      link: new FormControl('link')
    });
  }
  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const photoId = +params['id'];
      this.service.getPhoto(photoId).subscribe(photo => {
        this.photosForm.patchValue({
          photoId: photo.photoId,
          link: photo.link
        });
      });
    });
  }

  updatePhoto() {
    const photoId = this.photosForm.value.photoId; // Get the photoId from the form
    const newLink = this.photosForm.value.link; // Get the updated link from the form

    // Create the request payload with both photoId and link
    const photoPayload = {
      photoId: photoId,
      link: newLink
    };

    // Send the PUT request to update the photo
    this.service.updatePhoto(photoPayload).subscribe(data => {
      console.log("Photo updated:", data); 
    });
    this.router.navigate(['/photos/view-all-photos']);
  }
}
