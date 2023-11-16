import { Component, NgZone } from '@angular/core';

@Component({
  selector: 'app-common-header',
  template: '<p>{{ currentDate | date: "medium" }}</p>',
  styleUrls: ['./common-header.component.css']
})
export class CommonHeaderComponent {
  currentDate: Date = new Date();

  constructor(private ngZone: NgZone) {
    this.ngZone.runOutsideAngular(() => {
       setInterval(() => {
        this.ngZone.run(() => {
          this.currentDate = new Date();
        });
      }, 1000);
    });
  }
}
