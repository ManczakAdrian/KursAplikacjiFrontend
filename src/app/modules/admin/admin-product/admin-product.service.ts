import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Page } from 'src/app/shared/model/page';
import { AdminProduct } from './adminProduct';

@Injectable({
  providedIn: 'root'
})
export class AdminProductService {
  
  constructor(private http:HttpClient) { }

  getProduct(page:number, size: number): Observable<Page<AdminProduct>> {
    return this.http.get<Page<AdminProduct>>(`api/admin/products?page=${page}&size=${size}`);
}
delete(id: number): Observable<void> {
  return this.http.delete<void>('/api/admin/products/' + id)
}

}