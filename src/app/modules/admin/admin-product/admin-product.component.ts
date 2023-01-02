import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { map, startWith, switchMap } from 'rxjs';
import { AdminProductService } from './admin-product.service';
import { AdminProduct } from './adminProduct';

@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.scss']
})
export class AdminProductComponent implements AfterViewInit{
  
  
  @ViewChild (MatPaginator) paginator!: MatPaginator;
  displayedColumns: string[]=["id", "name","price","actions"]
  totalElements: number = 0;
  data:AdminProduct[] = [];

  constructor(private adminProductService: AdminProductService){}
  

  ngAfterViewInit(): void {
    this.paginator.page.pipe(
      startWith({}),
      switchMap(()=>{
        return this.adminProductService.getProduct(this.paginator.pageIndex, this.paginator.pageSize);

      })

    ).subscribe(data=> {
      this.totalElements=data.totalElements;
      this.data = data.content
    });
   }
  }


