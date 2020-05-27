import { Injectable } from '@angular/core';
import { MyPlants, JoinedPlant } from './interfaces/plant'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class MyplaService {
  userID: number;
  constructor(private http: HttpClient) {
    this.userID = 4;
  }

  getMyPlants(): Observable<JoinedPlant[]> {
    return this.http.get<JoinedPlant[]>('/api/MyPlants/4');
  }

  //getMyPlant(id: number) {
  //  return this.http.get<MyPlants>(`api/MyPlants/${id}`);
  //}

  //postMyPlant(newPlant: MyPlants) {

  //  return this.http.post<MyPlants>('/api/MyPlant', newPlant);
  //}

  postMyPlant(plantID: number) {
    console.log("The plant ID being passed into the wish object is " + plantID);
    let myPlant: MyPlants = {


      userID: this.userID,
      plantID: plantID,
      waterCompleted: false,
      

    };
    console.log("The 'wish.userID' is " + myPlant.userID);
    console.log("The 'wish.plantID' is " + myPlant.plantID);
    console.log("The myPlant.waterCompleted is " + myPlant.waterCompleted);
    return this.http.post<MyPlants>(`/api/myplants/`, myPlant);
  }

  deletePlant(favID: number) {
    return this.http.delete('/api/MyPlant/' + favID);
  }
}
