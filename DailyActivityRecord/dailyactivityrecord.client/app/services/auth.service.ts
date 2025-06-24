import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RegisterDto } from '../models/register-dto.model'

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly apiUrl = 'https://localhost:5001/api/auth';  

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<{ token: string }> {
    return this.http.post<{ token: string }>(`${this.apiUrl}/login`, { username, password });
  }

  register(data: RegisterDto): Observable<{ token: string }> {
    return this.http.post<{ token: string }>(`${this.apiUrl}/register`, data);
  }

  logout(): void {
    localStorage.removeItem('jwtToken');
  }

  getToken(): string | null {
    return localStorage.getItem('jwtToken');
  }
}
