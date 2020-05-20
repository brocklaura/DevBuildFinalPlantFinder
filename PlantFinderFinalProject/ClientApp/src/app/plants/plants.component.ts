import { Component, OnInit, Input } from '@angular/core';
import { PlantService } from '../plant.service';
import { WishlistService } from '../wishlist.service';
import { TrefleService } from '../trefle.service';
import { JoinedPlant, Plant, Wishlist } from '../interfaces/plant';


@Component({
  selector: 'app-plants',
  templateUrl: './plants.component.html',
  styleUrls: ['./plants.component.scss']
})
/** plants component*/
export class PlantsComponent {
  /** plants ctor */
  constructor(private plantData: PlantService,
    private wishlistData: WishlistService) {

  }

  plant: Plant[];

  ngOnInit() {
    this.get();
  }

  get() {
    this.plantData.getPlants().subscribe(
      (data: Plant[]) => {
        this.plant = data;
      },
      error => console.error(error)
    );
  }
 }

