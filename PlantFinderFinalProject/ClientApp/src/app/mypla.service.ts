import { Injectable } from '@angular/core';
import { MyPlants } from './interfaces/plant'
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MyplaService {
  constructor(private http: HttpClient) {

  }

  getMyPlants() {
    return this.http.get<MyPlants>('/api/MyPlant')
  }

  getMyPlant(id: number) {
    return this.http.get<MyPlants>(`api/MyPlant/${id}`);
  }

  postMyPlant(newPlant: MyPlants) {

    return this.http.post<MyPlants>('/api/MyPlant', newPlant);
  }
}
