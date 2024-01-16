import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.css',
})
export class GridComponent {
  @Input({ required: true }) rows!: Array<number>;
  @Input({ required: true }) cols!: Array<number>;
  @Input({ required: true }) xPos!: number;
  @Input({ required: true }) yPos!: number;
}
