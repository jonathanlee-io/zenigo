import {NgClass} from '@angular/common';
import {Component, input} from '@angular/core';

@Component({
  selector: 'app-feature-display',
  imports: [
    NgClass,
  ],
  templateUrl: './feature-display.component.html',
  styleUrl: './feature-display.component.scss',
  standalone: true,
})
export class FeatureDisplayComponent {
  primeIconClass = input.required<string>();
  title = input.required<string>();
  description = input.required<string>();
}
