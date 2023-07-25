import { Component, OnInit } from '@angular/core';
import { ColoursService } from '../colours.service';
import { Colours } from '../colours';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-colour',
  templateUrl: './create-colour.component.html',
  styleUrls: ['./create-colour.component.css']
})
export class CreateColourComponent implements OnInit {
  colourId = 0;
  description = "";

  constructor(private service: ColoursService) {
  }
  ngOnInit(): void {
  }
  createNewColour(form: NgForm) {
    let colour = {
      colourId: form.value.colourId,
      description: form.value.description,
    };
    this.service.createColour(colour).subscribe(data => {
      console.log(data);
    });
  }
}
