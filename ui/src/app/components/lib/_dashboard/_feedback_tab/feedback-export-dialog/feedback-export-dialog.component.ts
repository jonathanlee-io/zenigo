import {DatePipe} from '@angular/common';
import {Component, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {faker} from '@faker-js/faker/locale/en';
import {PrimeTemplate} from 'primeng/api';
import {ButtonDirective} from 'primeng/button';
import {DatePicker} from 'primeng/datepicker';
import {Dialog} from 'primeng/dialog';
import {RadioButton} from 'primeng/radiobutton';

import {DateRangeDto} from '../../../../../dtos/date/DateRange.dto';
import {
  ProductFeedbackSubmissionDto,
} from '../../../../../dtos/projects/ProductFeedbackSubmissionDto';

type ExportFormat = 'excel' | 'csv' | 'pdf';

@Component({
  selector: 'app-feedback-export-dialog',
  imports: [
    ButtonDirective,
    DatePipe,
    Dialog,
    PrimeTemplate,
    FormsModule,
    DatePicker,
    RadioButton,

  ],
  templateUrl: './feedback-export-dialog.component.html',
  styleUrl: './feedback-export-dialog.component.scss',
})
export class FeedbackExportDialogComponent {
  visible = signal<boolean>(false);
  // Initialize with default date range (last 30 days)
  dateRange: DateRangeDto = {
    startDate: new Date(new Date().setDate(new Date().getDate() - 30)).toISOString(),
    endDate: new Date().toISOString(),
  };
  selectedFormat: ExportFormat = 'excel';
  protected readonly feedbackSubmission = signal<ProductFeedbackSubmissionDto>({
    id: faker.string.uuid(),
    userFeedback: faker.lorem.text(),
    widgetMetadataUrl: 'https://www.roomyledger.com/login',
    clientIp: faker.internet.ip(),
    clientSubdomain: 'roomyledger',
    productId: faker.string.uuid(),
    widgetMetadataType: 'BUG_REPORT',
    widgetMetadataTimezone: 'Europe/Dublin',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    submittedAt: new Date().toISOString(),
  });

  toDate(date: string): Date | null | undefined {
    return new Date(date);
  }

  handleAction() {
    throw new Error('Method not implemented.');
  }

  open() {
    this.visible.set(true);
  }

  close() {
    this.visible.set(false);
  }

  exportData() {
    console.log('Exporting data with settings:', {
      dateRange: this.dateRange,
      format: this.selectedFormat,
    });

    // Here you would implement the actual export functionality
    // based on the selected format and date range

    this.close();
  }

  getFormatDisplayName(format: ExportFormat): string {
    const formatNames = {
      'excel': 'Microsoft Excel (.xlsx)',
      'csv': 'CSV (.csv)',
      'pdf': 'PDF (.pdf)',
    };
    return formatNames[format];
  }

  isFormValid(): boolean {
    return !!(this.dateRange.startDate &&
      this.dateRange.endDate &&
      this.selectedFormat);
  }
}
