import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Wishlist, JoinedPlant } from './interfaces/plant';

@Injectable()
export class WishlistService {
  userID: 4;

  constructor(private http: HttpClient) {
    

  }

  getWishlist() {
    return this.http.get<JoinedPlant[]>('/api/wishlist/' + this.userID);
  }

  deleteWishlist(wishID: number) {
    return this.http.delete('/api/wishlist/' + wishID);
  }

  postWishlist(plantID: number) {
    console.log(plantID);
    let wish: Wishlist = {
      
      userID: this.userID,
      plantID: plantID
      
    };
    console.log(wish.userID);
    return this.http.post<Wishlist>('/api/wishlist', wish);
  }

}
