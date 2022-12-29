import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Page } from 'src/app/shared/model/page';
import { Product } from './model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProduct(page:number, size: number): Observable <Page<Product>> {
return this.http.get<Page<Product>>(`api/product?page=${page}&size=${size}`);

//     return[
// {
//   name:"Product 1",
//   category: "Kategoria 1",
//   description: "Opis produktu 1",
//   price: 11.99,
//   currency: "PLN"
// },
// {
//   name:"Product 2",
//   category: "Kategoria 2",
//   description: "Opis produktu 2",
//   price: 11.99,
//   currency: "PLN"
// },
// {
//   name:"Product 3",
//   category: "Kategoria 3",
//   description: "Opis produktu 3",
//   price: 11.99,
//   currency: "PLN"
// }
//   ]
  }
}
