import { MaterialService } from '../material.service';
import { Materials } from '../material';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-material',
  templateUrl: './view-material.component.html',
  styleUrls: ['./view-material.component.css']
})
export class ViewMaterialComponent implements OnInit {
  materialId = 0;
  description = ""
  constructor(private activateRoute: ActivatedRoute, private service: MaterialService) {
  }
  ngOnInit(): void {
    this.activateRoute.params.subscribe(data => {
      this.materialId = data['id'];
    });
    this.service.getMaterial(this.materialId).subscribe(data => {
      this.materialId = data['materialId'];
      this.description = data['description'];
    });
  }
  getMaterial() {
  }
}
