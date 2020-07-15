import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.css']
})
export class CountdownTimerComponent implements OnInit {

  private intervalId = 0;
  message = '';
  remainingTime: number;
  clearTimer() {}
  start() {}
  stop() {}
  reset() {}
  private countDown() {}
  @Input() 
  seconds = 11;
  constructor() { }

  ngOnInit() {
  }

}
