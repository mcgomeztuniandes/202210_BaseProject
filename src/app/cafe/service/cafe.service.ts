import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Cafe } from '../model/cafe';

@Injectable({
  providedIn: 'root'
})
export class CafeService {
  private apiUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getAllCafes(): Observable<Cafe[]>{
    return this.http.get<Cafe[]>(this.apiUrl);
  }
}
