import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../photos.service';
import { Photos } from '../photos';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-all-photos',
  templateUrl: './view-all-photos.component.html',
  styleUrls: ['./view-all-photos.component.css']
})
export class ViewAllPhotosComponent implements OnInit {
  photoList: Photos[] = [];
  constructor(private service: PhotosService, private router: Router) {
  }
  ngOnInit(): void {
    this.service.getAllPhotos().subscribe(data => {
      this.photoList = data;
    });
  }
  goToPhotos() {
    this.router.navigate(['/photos']);
  }
}
