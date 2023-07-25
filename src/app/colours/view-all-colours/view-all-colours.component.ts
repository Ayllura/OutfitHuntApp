import { Component, OnInit } from '@angular/core';
import { ColoursService } from '../colours.service';
import { Colours } from '../colours';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-view-all-colours',
  templateUrl: './view-all-colours.component.html',
  styleUrls: ['./view-all-colours.component.css']
})
export class ViewAllColoursComponent implements OnInit {
  colourList: Colours[] = [];
  constructor(private service: ColoursService) {
  }
  ngOnInit(): void {
    this.service.getAllColours().subscribe(data => {
      this.colourList = data;
    });
  }
}

