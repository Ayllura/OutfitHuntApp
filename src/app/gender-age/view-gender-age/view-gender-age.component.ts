import { Component, OnInit } from '@angular/core';
import { GenderAgeService } from '../gender-age.service';
import { GenderAge } from '../gender-age';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-gender-age',
  templateUrl: './view-gender-age.component.html',
  styleUrls: ['./view-gender-age.component.css']
})
export class ViewGenderAgeComponent implements OnInit {
  genderAgeId = 0;
  gender = "";
  age = "";

  constructor(private activateRoute: ActivatedRoute, private service: GenderAgeService) {
  }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(data => {
      this.genderAgeId = data['id'];
    });
    this.service.getGenderAge(this.genderAgeId).subscribe(data => {
      this.genderAgeId = data['genderAgeId'];
      this.gender = data['gender'];
      this.age = data['age'];
      
      switch (this.gender) {
        case "F":
          this.gender = "Female"
          break;
        case "M":
          this.gender = "Male"
          break;
        case "U":
          this.gender = "Unisex"
          break;
        default:
          console.log("Invalid statement")
          break;
      }
    });
  }
} 
