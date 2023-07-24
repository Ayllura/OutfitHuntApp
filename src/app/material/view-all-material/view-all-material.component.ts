import { Component, OnInit } from '@angular/core';
import { MaterialService } from '../material.service';
import { Materials } from '../material';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-view-all-material',
  templateUrl: './view-all-material.component.html',
  styleUrls: ['./view-all-material.component.css']
})
export class ViewAllMaterialComponent implements OnInit {
  materialList: Materials[] = [] ;
  constructor(private service: MaterialService){
  }
  ngOnInit(): void {
  this.service.getAllMaterial().subscribe(data => {
  this.materialList = data;
  });
  }
}
