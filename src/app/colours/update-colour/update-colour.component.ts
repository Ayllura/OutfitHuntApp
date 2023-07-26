import { Component, OnInit } from '@angular/core';
import { ColoursService } from '../colours.service';
import { Colours } from '../colours';
import { FormGroup, NgForm, FormControl } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-update-colour',
  templateUrl: './update-colour.component.html',
  styleUrls: ['./update-colour.component.css']
})
export class UpdateColourComponent implements OnInit {
  coloursForm: FormGroup;

  constructor(private service: ColoursService, private route: ActivatedRoute, private router: Router) {
    this.coloursForm = new FormGroup({
      colourId: new FormControl(''),
      description: new FormControl('')
    });
  }
  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const colourId = +params['id'];
      this.service.getColour(colourId).subscribe(colour => {
        this.coloursForm.patchValue({
          colourId: colour.colourId,
          description: colour.description
        });
      });
    });
  }

  updateColour() {
    const newDescription = this.coloursForm.value.description; // Get the updated description from the form

    // Create the request payload with both materialId and description
    const colourPayload = {
      description: newDescription
    };

    // Send the PUT request to update the material
    this.service.updateColour(colourPayload).subscribe(data => {
      console.log("Colour updated:", data);
      
    });
    this.router.navigate(['/colours']);
  }
}

