import {Component} from '@angular/core';
import {Draggable, Droppable} from 'primeng/dragdrop';

@Component({
  selector: 'app-product-roadmap-board',
  imports: [
    Draggable,
    Droppable,
  ],
  templateUrl: './product-roadmap-board.component.html',
  styleUrl: './product-roadmap-board.component.scss',
})
export class ProductRoadmapBoardComponent {

}
