import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../photos.service';
import { Photos } from '../photos';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-photo',
  templateUrl: './create-photo.component.html',
  styleUrls: ['./create-photo.component.css']
})
export class CreatePhotoComponent implements OnInit {
  photoId = 0;
  link = "";

  constructor(private service: PhotosService) {
  }
  ngOnInit(): void {
  }
  createNewPhoto(form: NgForm) {
    let photo = {
      photoId: form.value.photoId,
      link: form.value.link,
    };
    this.service.createPhoto(photo).subscribe(data => {
      console.log(data);
    });
  }
}
