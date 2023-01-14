import { Component, OnDestroy, OnInit } from '@angular/core';
import { AdminMessageService } from '../admin-message.service';

@Component({
  selector: 'app-admin-message',
  templateUrl: './admin-message.component.html',
  styleUrls: ['./admin-message.component.scss']
})
export class AdminMessageComponent implements OnInit, OnDestroy{

  messages: Array <string>=[];
  private clickCounter: number=0;


constructor(private adminMessageService: AdminMessageService){}
  
  
ngOnInit(): void {
  this.adminMessageService.subject.subscribe(messages=>{ 
    this.messages=messages;
    this.timeoutCloseMessage();
  });
}

  
clearMessages (){
  this.messages=[];
  this.adminMessageService.clear();
}
ngOnDestroy(): void {
  this.adminMessageService.subject.unsubscribe();
}
private timeoutCloseMessage(): void {
  this.clickCounter++;
  setTimeout(() => {
    if (this.clickCounter == 1) {
      this.clearMessages();
    }
    this.clickCounter--;
  }, 12000);
}


}
