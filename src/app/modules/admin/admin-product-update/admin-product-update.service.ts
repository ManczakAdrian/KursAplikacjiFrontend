import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { AdminProductUpdate } from './model/adminProductUpdate';

@Injectable({
  providedIn: 'root'
})
export class AdminProductUpdateService {
  
  constructor(private http: HttpClient) { }

  getProduct(id: number):Observable <AdminProductUpdate> {
    return this.http.get<AdminProductUpdate>("/api/admin/products/" + id)

  }
  savePost(id: number, value: AdminProductUpdate) {
    return this.http.put<AdminProductUpdate>('api/admin/product'+id,value)
    
  }
}
