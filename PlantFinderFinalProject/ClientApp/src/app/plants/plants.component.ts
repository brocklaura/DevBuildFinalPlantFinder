import { Component, OnInit, Input } from '@angular/core';
import { Plant } from '../interfaces/plant';
import { PlantService } from '../plant.service';

@Component({
  selector: 'app-plants',
  templateUrl: './plants.component.html',
  styleUrls: ['./plants.component.scss']
})
/** plants component*/
export class PlantsComponent {
  /** plants ctor */
  constructor(private plantData: PlantService) {

  }

  plantz: Plant[];

  ngOnInit() {
    this.get();
  }

  get() {
    this.plantData.getPlants().subscribe(
      (data: Plant[]) => {
        this.plantz = data;
      },
      error => console.error(error)
    );
  }
 }

