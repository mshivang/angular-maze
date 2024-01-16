import { Component, Input } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { MatIconModule } from '@angular/material/icon';
import { Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-controller',
  standalone: true,
  imports: [MatSliderModule, MatIconModule, CommonModule],
  templateUrl: './controller.component.html',
  styleUrl: './controller.component.css',
})
export class ControllerComponent {
  formatLabel(value: number): string {
    return `${value}`;
  }

  @Output() rowsChangedEvent = new EventEmitter<number>();
  @Output() colsChangedEvent = new EventEmitter<number>();
  @Output() startGameEvent = new EventEmitter();
  @Output() resetGameEvent = new EventEmitter();
  @Output() xChangeEvent = new EventEmitter();
  @Output() yChangeEvent = new EventEmitter();

  @Input({ required: true }) gameStarted!: boolean;
  @Input({ required: true }) xPos!: number;
  @Input({ required: true }) yPos!: number;
  @Input({ required: true }) rows!: number;
  @Input({ required: true }) cols!: number;

  setRows(value: number) {
    this.rowsChangedEvent.emit(value);
  }

  setCols(value: number) {
    this.colsChangedEvent.emit(value);
  }

  toggleGame() {
    this.gameStarted ? this.resetGameEvent.emit() : this.startGameEvent.emit();
  }

  xInBound(x: number) {
    if (x < 0 || x >= this.cols) return false;
    return true;
  }

  yInBound(y: number) {
    if (y < 0 || y >= this.rows) return false;
    return true;
  }

  setX(val: number) {
    const newX = this.xPos + val;

    if (this.xInBound(newX)) {
      this.xChangeEvent.emit(newX);
    } else {
      alert('Place out of bound!');
    }
  }

  setY(val: number) {
    const newY = this.yPos + val;

    if (this.yInBound(newY)) {
      this.yChangeEvent.emit(newY);
    } else {
      alert('Place out of bound!');
    }
  }
}
