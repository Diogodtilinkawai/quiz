import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExamenService {
  private apiurl = 'https://qapi.vercel.app/api/random';
  constructor(private http: HttpClient) { }
  quotes() {
    return this.http.get(this.apiurl);
  }
}
