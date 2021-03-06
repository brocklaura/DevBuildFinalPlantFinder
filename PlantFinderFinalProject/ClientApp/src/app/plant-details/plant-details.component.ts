import { Component, Input } from '@angular/core';
import { Plant, Wishlist } from '../interfaces/plant';
import { PlantService } from '../plant.service';
import { MyplaService } from '../mypla.service';
import { WishlistService } from '../wishlist.service';

@Component({
    selector: 'app-plant-details',
    templateUrl: './plant-details.component.html',
    styleUrls: ['./plant-details.component.scss']
})
/** plant-details component*/
export class PlantDetailsComponent {
  @Input() plant: Plant;
    /** plant-details ctor */
  constructor(private plantData: PlantService, private myplantData: MyplaService, private wishListData: WishlistService) {

  }
  addToWishlist(id: number) {
    this.wishListData.postWishlist(id).subscribe(
      (data: any) => console.log('success! ' + id),
      error => console.error(error)
    );
  }

  addToMyPlants(id: number) {
    this.myplantData.postMyPlant(id).subscribe(
      (data: any) => console.log('success! ' + id),
      error => console.error(error)
    );
  }
  
}
