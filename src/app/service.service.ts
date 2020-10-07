import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private baseUrl = 'https://5f71e9fd64a3720016e61150.mockapi.io';
  constructor(
    private http : HttpClient
  ) { }

  getsanpham(){
    return this.http.get(this.baseUrl);

  }
} 
