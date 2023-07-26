import { Component, OnInit } from '@angular/core';
import { ColoursService } from '../colours.service';
import { Colours } from '../colours';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-create-colour',
  templateUrl: './create-colour.component.html',
  styleUrls: ['./create-colour.component.css']
})
export class CreateColourComponent implements OnInit {
  colourId = 0;
  description = ""

  constructor(private service: ColoursService, private router: Router) {
  }
  ngOnInit(): void {
  }
  createNewColour(form: NgForm) {
    let colour = {
      colourId: form.value.colourId,
      description: form.value.description
    };

    console.log('Colour:'+ (colour) );
    console.log('Colour Id:'+ (colour.colourId) );
    console.log('Colour description:'+ (colour.description) );
    this.service.createColour(colour).subscribe(data => {
      console.log(data);
      this.router.navigate(['/colours']);
    });
  }
}
