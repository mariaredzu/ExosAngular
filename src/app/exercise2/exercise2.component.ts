import { Component } from '@angular/core';

interface OperationHistory {
  timestamp: string;
  operation: string;
  result: number;
}

@Component({
  selector: 'app-exercise2',
  templateUrl: './exercise2.component.html',
  styleUrls: ['./exercise2.component.css']
})

export class Exercise2Component {

  num1: number = 0;
  num2: number = 0;
  selectedOperation: string = '+';
  result: number = 0;
  history: OperationHistory[] = [];

  calculate(): void {
    switch (this.selectedOperation) {
      case '+':
        this.result = this.num1 + this.num2;
        break;
      case '-':
        this.result = this.num1 - this.num2;
        break;
      case '*':
        this.result = this.num1 * this.num2;
        break;
      case '/':
        this.result = this.num1 / this.num2;
        break;
        default:
        break;
  }

  this.addToHistory();
  }

  addToHistory(): void {
    const timestamp = new Date().toLocaleString();
    const historyEntry: OperationHistory = {
      timestamp,
      operation: `${this.num1} ${this.selectedOperation} ${this.num2}`,
      result: this.result
    };

    this.history.unshift(historyEntry);
  }

  removeFromHistory(index: number): void {
    this.history.splice(index, 1);
  }
}
