import { Component, OnInit } from '@angular/core';
import { WishlistService } from '../wishlist.service';
import { TrefleService } from '../trefle.service';
import { JoinedPlant, Plant, Wishlist } from '../interfaces/plant';
import { PlantService } from '../plant.service';


@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
/** wishlist component*/
export class WishlistComponent {
  /** wishlist ctor */
  constructor(private wishlistData: WishlistService) { }

  wishlist: JoinedPlant[];

  ngOnInit() {
    this.get();
  }

  delete(id: number) {
    this.wishlistData.deleteWishlist(id).subscribe(
      (data: any) => {
        console.log(data);
        this.get();
      },
      error => console.error(error)
    );
  }

  get() {
    this.wishlistData.getWishlist().subscribe(
      (data: JoinedPlant[]) => {
        this.wishlist = data;
      },
      error => console.error(error)
    );
  }
}
