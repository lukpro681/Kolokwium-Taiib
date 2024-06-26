import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Mouse {
  id: number;
  model: string;
  dpi: number;
}

@Injectable({
  providedIn: 'root'
})
export class MouseService {

  private apiUrl = 'https://localhost:7250/api/mouse';

  constructor(private http: HttpClient) {}

  getMice(): Observable<Mouse[]> {
    return this.http.get<Mouse[]>(this.apiUrl);
  }

  addMouse(mouse: Mouse): Observable<Mouse> {
    return this.http.post<Mouse>(this.apiUrl, mouse);
  }

  deleteMouse(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
