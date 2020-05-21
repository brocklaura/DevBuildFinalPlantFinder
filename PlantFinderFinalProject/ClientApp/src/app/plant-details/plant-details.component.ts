import { Component, Input } from '@angular/core';
import { Plant, Wishlist } from '../interfaces/plant';
import { PlantService } from '../plant.service';
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
  constructor(private plantData: PlantService, private wishlistData: WishlistService) {

  }
  addToWishlist(id: number) {
    this.wishlistData.postWishlist(id).subscribe(
      (data: any) => console.log('success! ' + id), //TODO: change the button
      error => console.error(error)
    );
  }
  
}
