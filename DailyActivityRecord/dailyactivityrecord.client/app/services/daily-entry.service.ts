import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DailyEntryService {
  private readonly apiUrl = 'https://localhost:5001/api/dailyentry';  // Update to your backend URL

  constructor(private http: HttpClient) { }

  submitDailyEntry(entry: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, entry);
  }
}
