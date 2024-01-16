import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { GridComponent } from '../components/grid/grid.component';
import { ControllerComponent } from '../components/controller/controller.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, GridComponent, ControllerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-maze';

  generateArray = (size: number): Array<number> => {
    return Array(size)
      .fill(0)
      .map((x, i) => i);
  };

  rows: Array<number> = this.generateArray(5);
  cols: Array<number> = this.generateArray(5);
  gameStarted: boolean = false;
  xPos: number = 0;
  yPos: number = 0;

  setRows(input: number) {
    this.rows = this.generateArray(input);
  }

  setCols(input: number) {
    this.cols = this.generateArray(input);
  }

  startGame() {
    this.gameStarted = true;
    this.xPos = 0;
    this.yPos = 0;
  }

  resetGame() {
    this.gameStarted = false;
    this.xPos = 0;
    this.yPos = 0;
  }

  setX(val: number) {
    this.xPos = val;
  }

  setY(val: number) {
    this.yPos = val;
  }
}
