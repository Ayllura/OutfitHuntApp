import { Component, OnInit } from '@angular/core';
import { GenderAgeService } from '../gender-age.service';
import { GenderAge } from '../gender-age';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-view-all-gender-ages',
  templateUrl: './view-all-gender-ages.component.html',
  styleUrls: ['./view-all-gender-ages.component.css']
})
export class ViewAllGenderAgesComponent implements OnInit {
  genderAgeList: GenderAge[] = [];

  constructor(private service: GenderAgeService) {
  }
  ngOnInit(): void {
    this.service.getAllGenderAges().subscribe(data => {
      this.genderAgeList = data;
    });
  }

  genderToText(gender: string): string {
    switch (gender) {
      case "F":
        return "Female";
      case "M":
        return "Male";
      case "U":
        return "Unisex";
      default:
        return "";
    }
  }
}
