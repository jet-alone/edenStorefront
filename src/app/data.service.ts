import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Plant } from './models/plant.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private plantUrl = 'https://efa-gardenapp-backend.herokuapp.com/api/product'

  constructor(private _http: HttpClient) { }

  getPlants() : Observable <Plant[]> {
    return this._http.get<Plant[]>(this.plantUrl)
  }
}