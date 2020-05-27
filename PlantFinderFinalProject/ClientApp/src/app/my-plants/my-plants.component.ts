/// <reference path="../plants/plants.component.ts" />
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
  //objPatch: patchWater; //added for patch
  

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

  delete(id: number) {
    this.plantsData.deletePlant(id).subscribe(
      (data: any) => {
        console.log("the plant id being passed id" + id);
        this.get();
      },
      error => console.error(error)
    );
  }

  remaining(): number {

    return this.myPlants.filter(todo => !todo.waterCompleted).length;
  }

  doneWatering(): string {
    if (this.remaining() == 0) {
      return 'Congrats you are all done watering!!';
    }
  }

  //added for patch
  //patch() {
  //  this.plantsData.patch(opost).subscribe
  //  (
  //    data =>
  //    {
  //      this.objPatch = data;
  //    }
  //  )

//}
}
