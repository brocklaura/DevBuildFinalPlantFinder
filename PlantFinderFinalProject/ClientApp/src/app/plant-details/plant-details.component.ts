import { Component, Input } from '@angular/core';
import { Plant } from '../interfaces/plant';
import { PlantService } from '../plant.service'

@Component({
    selector: 'app-plant-details',
    templateUrl: './plant-details.component.html',
    styleUrls: ['./plant-details.component.scss']
})
/** plant-details component*/
export class PlantDetailsComponent {
  @Input() plant: Plant;
    /** plant-details ctor */
    constructor(private plantservice: PlantService) {

  }
  edit
}
