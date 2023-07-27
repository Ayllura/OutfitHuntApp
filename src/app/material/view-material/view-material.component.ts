import { MaterialService } from '../material.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view-material',
  templateUrl: './view-material.component.html',
  styleUrls: ['./view-material.component.css']
})
export class ViewMaterialComponent implements OnInit {
  materialId = 0;
  description = "";

  constructor(private activateRoute: ActivatedRoute, private service: MaterialService, private router: Router) {
  }
  ngOnInit(): void {
    // Subscribe to the route parameters to get the materialId from the URL
    this.activateRoute.params.subscribe(data => {
      this.materialId = data['id'];
    });

    // Fetch the material data based on the materialId from the service
    this.service.getMaterial(this.materialId).subscribe(data => {
      // Update the component properties with the retrieved material data
      this.materialId = data['materialId'];
      this.description = data['description'];
    });
  }

  // Function to navigate back to the 'material' route
  backHome() {
    this.router.navigate(['/material']);
  }
}
