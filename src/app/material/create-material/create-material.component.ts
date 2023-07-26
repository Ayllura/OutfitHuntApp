import { Component, OnInit } from '@angular/core';
import { MaterialService } from '../material.service';
import { Materials } from '../material';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-material',
  templateUrl: './create-material.component.html',
  styleUrls: ['./create-material.component.css']
})
export class CreateMaterialComponent implements OnInit {
  materialId: number | null = null;
  description = ""

  constructor(private service: MaterialService, private router: Router) {
  }
  ngOnInit(): void {
  }
  createNewMaterial(form: NgForm) {
    const parsedMaterialId = parseInt(form.value.materialId, 10);

    if (parsedMaterialId === 0 || isNaN(parsedMaterialId)) {
      console.error("Invalid materialId");
      return;
    }

    let material = {
      materialId: form.value.materialId,
      description: form.value.description
    };
    this.service.createMaterial(material).subscribe(data => {
      console.log(data);
      this.router.navigate(['/material']);
    });
  }
}