import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChildService {
  private readonly apiUrl = 'https://localhost:5001/api/child'; // update for your backend

  constructor(private http: HttpClient) { }

  getChildProfile(childId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/profile/${childId}`);
  }
}
