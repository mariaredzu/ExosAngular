import { Component } from '@angular/core';

@Component({
  selector: 'app-common-header',
  template: '<div>{{ currentDate | date: "medium" }}</div>',
  styleUrls: ['./common-header.component.css']
})
export class CommonHeaderComponent {
  currentDate: Date = new Date();

  constructor() {
    setInterval(() => {
      this.currentDate = new Date();
    }, 1000);
  }
}