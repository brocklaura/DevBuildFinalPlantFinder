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
  //might need to change back to array
  myPlants: JoinedPlant[];

  ngOnInit() {
    this.get();
  }


  get() {
    this.plantsData.getMyPlants().subscribe(
      //might need to change back to array JoinedPlant[]
      (data: JoinedPlant[]) => {
        this.myPlants = data;
      },
      error => console.error(error)
    );
  }
}
