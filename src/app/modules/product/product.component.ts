import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Page } from 'src/app/shared/model/page';
import { Product } from './model/product';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
 
  page!: Page<Product>;


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
    this.getProducts();
    
  }

  getProducts(){
    this.getProductPage(0,10);
  }

onPageEvent (event: PageEvent){
  this.getProductPage(event.pageIndex,event.pageSize);

}
private getProductPage(page:number, size: number){
  this.productService.getProduct(page, size)
  .subscribe(page=> this.page = page);

}


}
