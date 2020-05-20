import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Plant } from './interfaces/plant';
import { MyPlants } from './interfaces/plant';
import { Wishlist } from './interfaces/plant';
//import { JoinedPlant } from './interfaces/plant';
//import { Users } from './interfaces/plant';


@Injectable({
  providedIn: 'root'
})
export class TrefleService {
  apiUrl = 'https://trefle.io/api/plants';
  token = '?token=QVRxS2dlY1o3cmVSeUV1QlZzQnNXUT09';

    constructor(private http: HttpClient) {

  }

  getPlants() {
    return this.http.get<Plant>(`${this.apiUrl}/plant` + this.token)
  }

  getMyPlants(url: string) {
    return this.http.get<MyPlants>(url)
  }

  getWishlist(url: string) {
    return this.http.get<Wishlist>(url)
  }

}
