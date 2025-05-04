import {Component, computed, effect, input, model} from '@angular/core';
import {ButtonDirective} from 'primeng/button';
import {ArrowLeftIcon, ArrowRightIcon} from 'primeng/icons';

@Component({
  selector: 'app-paginator',
  imports: [
    ButtonDirective,
    ArrowRightIcon,
    ArrowLeftIcon,
  ],
  templateUrl: './paginator.component.html',
  styleUrl: './paginator.component.scss',
})
export class PaginatorComponent {
  totalItems = input.required<number>();
  itemsPerPage = input.required<number>();
  currentPage = model<number>(0);
  protected readonly totalPages = computed(() => Math.ceil(this.totalItems() / this.itemsPerPage()));
  protected readonly isClickPrevDisabled = computed(() => this.currentPage() === 0);
  protected readonly isClickNextDisabled = computed(() => this.currentPage() === this.totalPages() - 1);
  protected startItemIndex: number = 0;
  protected endItemIndex: number = 0;

  constructor() {
    effect(() => {
      this.updateIndices(this.currentPage());
    });
  }

  onClickPrev() {
    if (this.currentPage() === 0) {
      return;
    }
    this.currentPage.update((oldValue) => oldValue - 1);
  }

  onClickNext() {
    if (this.currentPage() === (this.totalItems() / this.itemsPerPage()) - 1) {
      return;
    }
    this.startItemIndex += this.itemsPerPage();
    this.currentPage.update((oldValue) => oldValue + 1);
  }

  private updateIndices(currentPage: number) {
    this.endItemIndex = Math.min(this.itemsPerPage(), this.totalItems());
    if (currentPage === 0) {
      this.startItemIndex = 0;
      return;
    }
    this.startItemIndex = this.itemsPerPage() * (currentPage - 1);
  }
}
