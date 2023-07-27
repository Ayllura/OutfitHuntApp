import { Component, OnInit } from '@angular/core';
import { GenderAgeService } from '../gender-age.service';
import { GenderAge } from '../gender-age';
import { FormGroup, NgForm, FormControl } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-update-gender-age',
  templateUrl: './update-gender-age.component.html',
  styleUrls: ['./update-gender-age.component.css']
})
export class UpdateGenderAgeComponent implements OnInit {
  genderAgeForm: FormGroup;

  constructor(private service: GenderAgeService, private route: ActivatedRoute, private router: Router) {
    this.genderAgeForm = new FormGroup({
      genderAgeId: new FormControl('genderAgeId'),
      gender: new FormControl('gender'),
      age: new FormControl('age')
    });
  }
  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const genderAgeId = +params['id'];
      this.service.getGenderAge(genderAgeId).subscribe(genderAge=> {
        this.genderAgeForm.patchValue({
          genderAgeId: genderAge.genderAgeId,
          gender: genderAge.gender,
          age: genderAge.age
        });
      });
    });
  }

  updateGenderAge() {
    const genderAgeId = this.genderAgeForm.value.genderAgeId;
    const newGender= this.genderAgeForm.value.gender;
    const newAge= this.genderAgeForm.value.age;

    // Create the request payload with genderAgeId and gender and age
    const genderAgePayload = {
      genderAgeId: genderAgeId,
      gender: newGender,
      age: newAge
    };

    // Send the PUT request to update the material
    this.service.updateGenderAge(genderAgePayload).subscribe(data => {
      console.log("GenderAge updated:", data);
    });
    this.router.navigate(['/genderAge/view-all-gender-ages']);
  }
}
