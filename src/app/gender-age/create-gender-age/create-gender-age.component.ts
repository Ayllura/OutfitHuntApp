import { Component, OnInit } from '@angular/core';
import { GenderAgeService } from '../gender-age.service';
import { GenderAge } from '../gender-age';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-gender-age',
  templateUrl: './create-gender-age.component.html',
  styleUrls: ['./create-gender-age.component.css']
})
export class CreateGenderAgeComponent implements OnInit {
  genderAgeId = 0;
  gender = "";
  age = "";

  constructor(private service: GenderAgeService) {
  }
  ngOnInit(): void {
  }
  createGenderAge(form: NgForm) {
    let genderAge = {
      genderAgeId: form.value.genderAgeId,
      gender: form.value.gender,
      age: form.value.age,
    };
    this.service.createGenderAge(genderAge).subscribe(data => {
      console.log(data);
    });
  }
}