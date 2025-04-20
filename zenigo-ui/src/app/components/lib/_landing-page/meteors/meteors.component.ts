import {Component, input, OnInit, signal} from '@angular/core';

@Component({
  selector: 'app-meteors',
  imports: [],
  templateUrl: './meteors.component.html',
  styleUrl: './meteors.component.scss',
})
export class MeteorsComponent implements OnInit {
  meteorCount = input.required<number>();
  protected meteors = signal<{ top: number; left: string; animationDelay: string; animationDuration: string; }[]>([]);

  ngOnInit() {
    const meteorIterable = [];
    for (let i = 0; i < this.meteorCount(); i++) {
      meteorIterable.push(
          {
            top: 0,
            left: Math.floor(Math.random() * (400 - -400) + -400) + 'px',
            animationDelay: Math.random() * (0.8 - 0.2) + 0.2 + 's',
            animationDuration: Math.floor(Math.random() * (10 - 2) + 2) + 's',
          },
      );
    }
    this.meteors.set([...meteorIterable]);
  }
}
