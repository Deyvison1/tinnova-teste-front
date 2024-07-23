import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vehicle } from '../model/vehicle.model';

@Injectable({
  providedIn: 'root',
})
export class VehicleService {
  private url = 'http://localhost:8080/api/vehicle';

  constructor(private http: HttpClient) {}

  getAllfilters(brand: string, year: number, color: string): Observable<Vehicle[]> {
    let yearVehicle = 0;
    if(year > 0) {
      yearVehicle = year;
    }
    return this.http.get<Vehicle[]>(`${this.url}/getAllfilters?brand=${brand}&color=${color}&yearVehicle=${yearVehicle}`);
  }

  getById(id: number): Observable<Vehicle> {
    return this.http.get<Vehicle>(`${this.url}/getById/${id}`);
  }

  add(vehicle: Vehicle): Observable<Vehicle> {
    return this.http.post<Vehicle>(`${this.url}/create`, vehicle);
  }

  update(vehicle: Vehicle): Observable<Vehicle> {
    return this.http.put<Vehicle>(`${this.url}/update/${vehicle.id}`, vehicle);
  }

  remove(id: number)  {
    return this.http.delete(`${this.url}/delete/${id}`);
  }
}
