import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Wishlist, JoinedPlant } from './interfaces/plant';

@Injectable()
export class WishlistService {
  userID: number;

  constructor(private http: HttpClient) {


  }

  getWishlist() {
    return this.http.get<JoinedPlant[]>('/api/wishlist/' + 4);
  }

  deleteWishlist(wishID: number) {
    return this.http.delete('/api/wishlist/' + wishID);
  }

  postWishlist(plantID: number) {
    console.log("The plant ID being passed into the wish object is " + plantID);
    let wish: Wishlist = {
      
      userID: 4,
      plantID: plantID
      
    };
    console.log("The 'wish.userID' is " + wish.userID);
    console.log("The 'wish.plantID' is " + wish.plantID);
    return this.http.post<Wishlist>('/api/wishlist', wish);
  }

}
