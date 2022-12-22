import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  categorys=['Kategoria 1','Kategoria 2','Kategoria 3','Kategoria 4','Kategoria 5'];

  constructor(){ }

  ngOnInit(): void {
    
  }
  }


