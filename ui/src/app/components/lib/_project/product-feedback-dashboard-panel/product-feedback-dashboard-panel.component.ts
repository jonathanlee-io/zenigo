
import {Component, effect, inject, input, OnInit, signal} from '@angular/core';

import {ProductFeedbackSubmissionsOffsetKey, ProjectStore} from '../../../../+state/project/project.store';
import {ProductFeedbackSubmissionDto} from '../../../../dtos/projects/ProductFeedbackSubmissionDto';
import {DateTimeService} from '../../../../services/date-time/date-time.service';
import {PaginatorComponent} from '../../paginator/paginator.component';

@Component({
  selector: 'app-product-feedback-dashboard-panel',
  imports: [
    PaginatorComponent,
  ],
  templateUrl: './product-feedback-dashboard-panel.component.html',
  styleUrl: './product-feedback-dashboard-panel.component.scss',
})
export class ProductFeedbackDashboardPanelComponent implements OnInit {
  private static readonly paginationKey = 'productFeedbackDashboardPanelPagination';

  productFeedbackSubmissions = input.required<(ProductFeedbackSubmissionDto & {serverResponseTime: string})[]>();

  protected readonly currentPage = signal<number>(this.getLocalStorageValueOrDefault());
  protected readonly projectStore = inject(ProjectStore);
  protected readonly itemsPerPage: number = 5;
  protected readonly formatDateString = DateTimeService.formatDateTimeString;

  constructor() {
    let isInitialized = false;

    effect(() => {
      const page = this.currentPage();

      if (!isInitialized) {
        isInitialized = true;
        return;
      }

      localStorage.setItem(ProductFeedbackDashboardPanelComponent.paginationKey, String(page));
      const offset = page * this.itemsPerPage;
      this.projectStore.setProductFeedbackSubmissionsOffset(offset);
      this.projectStore.loadProductFeedbackByProjectId(String(this.projectStore.projectById()?.id));
    });
  }

  ngOnInit() {
    localStorage.removeItem(ProductFeedbackDashboardPanelComponent.paginationKey);
    localStorage.removeItem(ProductFeedbackSubmissionsOffsetKey);
  }

  private getLocalStorageValueOrDefault() {
    const localStorageValue = localStorage.getItem(ProductFeedbackDashboardPanelComponent.paginationKey);
    if (!localStorageValue) {
      return 0;
    }
    return Number(localStorageValue);
  }
}
