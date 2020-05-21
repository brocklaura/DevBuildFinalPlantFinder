import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Wishlist, JoinedPlant } from './interfaces/plant';

@Injectable()
export class WishlistService {
  userID: number;

  constructor(private http: HttpClient) {
    this.userID = 0;

  }

  getWishlist() {
    return this.http.get<JoinedPlant[]>('/api/wishlist/' + this.userID);
  }

  deleteWishlist(wishID: number) {
    return this.http.delete('/api/wishlist/' + wishID);
  }

  postWishlist(plantID: number) {
    let wish: Wishlist = {
      id: 0,
      userID: this.userID,
      plantID: plantID
      
    };
    return this.http.post<Wishlist>('/api/wishlist', wish);
  }

}
