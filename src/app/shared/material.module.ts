import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatIconModule, 
    MatButtonModule
  ],
  exports:[
    MatIconModule,
    MatButtonModule
  ]
})
export class MaterialModule { }
