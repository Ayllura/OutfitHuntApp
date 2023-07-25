import { Component, OnInit } from '@angular/core';
import { ColoursService } from '../colours.service';
import { Colours } from '../colours';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-colour',
  templateUrl: './view-colour.component.html',
  styleUrls: ['./view-colour.component.css']
})
export class ViewColourComponent implements OnInit {
  colourId = 0;
  description = "";

  constructor(private activateRoute: ActivatedRoute, private service: ColoursService) {
  }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(data => {
      this.colourId = data['id'];
    });
    this.service.getColour(this.colourId).subscribe(data => {
      this.colourId = data['ColourId'];
      this.description = data['Description'];
    });
  }
  getProduct() {
  }
} 

