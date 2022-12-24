import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProduct(): Observable <Product[]> {
return this.http.get<Product[]>("api/product");

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
