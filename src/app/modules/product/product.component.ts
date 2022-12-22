import { Component, OnInit } from '@angular/core';
import { Product } from './model/product';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  product: Product[]=[];
//   product=[
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
//   ];
  constructor(private productService: ProductService){}
  ngOnInit(): void {
    this.getProduct();
    
    
  }
  getProduct(){
    this.product= this.productService.getProduct();
  }
  

}
