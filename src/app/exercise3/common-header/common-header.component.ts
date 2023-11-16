import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-common-header',
  template: '<p>{{ currentDateTime | date: "short" }}</p>',
  styleUrls: ['./common-header.component.css']
})
export class CommonHeaderComponent implements OnInit, OnDestroy {
  currentDateTime: Date = new Date();
  private timerInterval: any;

  ngOnInit() {
    this.startInterval();
  }

  ngOnDestroy() {
    this.stopInterval();
  }

  private startInterval() {
    this.timerInterval = setInterval(() => {
      this.currentDateTime = new Date();
    }, 1000);
  }

  private stopInterval() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
    }
  }
}