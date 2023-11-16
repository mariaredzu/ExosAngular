import { Component } from '@angular/core';

@Component({
  selector: 'app-exercise1',
  templateUrl: './exercise1.component.html',
  styleUrls: ['./exercise1.component.css']
})
export class Exercise1Component {
  userName: string = '';
  selectedFont: string = 'Arial';
  fontSize: number = 16;
  alignment: string = 'left';

  updateUserName(name: string): void {
    this.userName = name.toUpperCase();
  }
}
