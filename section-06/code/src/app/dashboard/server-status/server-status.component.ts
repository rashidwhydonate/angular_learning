import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent implements OnInit, OnDestroy {
  currentStatus = 'offline';
  intervalId?: any;

  ngOnInit(){
    this.intervalId = setInterval(() => {
      if (this.currentStatus === 'offline') {
        this.currentStatus = 'unknown';
      } else if (this.currentStatus === 'unknown') {
        this.currentStatus = 'online';
      } else {
        this.currentStatus = 'offline';
      }
    }, 3000)
  }

  ngOnDestroy(){
    if(this.intervalId){
      clearInterval(this.intervalId)
    }
  }
}
