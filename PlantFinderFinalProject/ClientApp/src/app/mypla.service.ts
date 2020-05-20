import { Injectable } from '@angular/core';
import { MyPlants, JoinedPlant } from './interfaces/plant'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class MyplaService {
  constructor(private http: HttpClient) {

  }

  getMyPlants(): Observable<JoinedPlant[]> {
    return this.http.get<JoinedPlant[]>('/api/MyPlants/1');
  }

  getMyPlant(id: number) {
    return this.http.get<MyPlants>(`api/MyPlant/${id}`);
  }

  postMyPlant(newPlant: MyPlants) {

    return this.http.post<MyPlants>('/api/MyPlant', newPlant);
  }
}
