import { Component, OnInit } from '@angular/core';
import { MaterialService } from '../material.service';
import { Material } from '../material';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-material',
  templateUrl: './view-material.component.html',
  styleUrls: ['./view-material.component.css']
})
export class ViewMaterialComponent implements OnInit {
  MaterialId = 0;
  Description = ""
  constructor(private activateRoute: ActivatedRoute, private service: MaterialService) {
  }
  ngOnInit(): void {
    this.activateRoute.params.subscribe(data => {
      this.MaterialId = data['id'];
    });
    this.service.getMaterial(this.MaterialId).subscribe(data => {
      this.MaterialId = data['MaterialId'];
      this.Description = data['Description'];
    });
  }
  getMaterial() {
  }
}
