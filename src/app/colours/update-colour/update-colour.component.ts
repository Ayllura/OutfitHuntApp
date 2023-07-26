import { Component, OnInit } from '@angular/core';
import { ColoursService } from '../colours.service';
import { Colours } from '../colours';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-update-colour',
  templateUrl: './update-colour.component.html',
  styleUrls: ['./update-colour.component.css']
})
export class UpdateColourComponent implements OnInit {
  colourId = 0;
  description = "";

  constructor(private activateRoute: ActivatedRoute, private service: ColoursService) {
  }
  ngOnInit(): void {
    this.activateRoute.params.subscribe(data => {
      this.colourId=data['id']
    });
 
      }
  updateColour(form: NgForm) {
    let colour = {
      colourId: form.value.colourId,
      description: form.value.description,
    };
    this.service.createColour(colour).subscribe(data => {
      console.log(data);
    });
  }
} 
