import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../photos.service';
import { Photos } from '../photos';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-photo',
  templateUrl: './view-photo.component.html',
  styleUrls: ['./view-photo.component.css']
})
export class ViewPhotoComponent implements OnInit {
  photoId = 0;
  link = "";

  constructor(private activateRoute: ActivatedRoute, private service: PhotosService) {
  }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(data => {
      this.photoId = data['id'];
    });
    this.service.getPhoto(this.photoId).subscribe(data => {
      this.photoId = data['photoId'];
      this.link = data['link'];
    });
  }
  getProduct() {
  }
} 
