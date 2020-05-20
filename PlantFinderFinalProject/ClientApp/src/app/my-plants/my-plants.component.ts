import { Component } from '@angular/core';
import { MyPlants, Plant, JoinedPlant } from '../interfaces/plant';
import { MyplaService } from '../mypla.service';

@Component({
    selector: 'app-my-plants',
    templateUrl: './my-plants.component.html',
    styleUrls: ['./my-plants.component.scss']
})
/** my-plants component*/
export class MyPlantsComponent {
    /** my-plants ctor */
    constructor(private plantsData: MyplaService) {

  }
  myPlants: JoinedPlant[];

  ngOnInit() {
    this.get();
  }

  get() {
    this.plantsData.getMyPlants().subscribe(
      (data: JoinedPlant[]) => {
        this.myPlants = data;
      },
      error => console.error(error)
    );
  }
}
