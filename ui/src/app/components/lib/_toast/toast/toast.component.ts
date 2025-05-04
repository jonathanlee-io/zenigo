import {animate, style, transition, trigger} from '@angular/animations';
import {NgClass} from '@angular/common';
import {Component, inject} from '@angular/core';

import {Toast, ToastStore} from '../../../../+state/toast/toast.store';

@Component({
  selector: 'app-toast',
  imports: [
    NgClass,
  ],
  animations: [
    trigger('slideIn', [
      transition(':enter', [
        style({transform: 'translateX(100%)', opacity: 0}),
        animate('300ms cubic-bezier(0.4, 0, 0.2, 1)',
            style({transform: 'translateX(0)', opacity: 1})),
      ]),
      transition(':leave', [
        animate('200ms cubic-bezier(0.4, 0, 0.2, 1)',
            style({transform: 'translateX(100%)', opacity: 0})),
      ]),
    ]),
  ],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.scss',
})
export class ToastComponent {
  protected readonly toastStore = inject(ToastStore);

  getToastClass(toast: Toast): string {
    const baseClasses = 'relative';

    switch (toast.severity) {
      case 'success':
        return `${baseClasses} bg-light-success text-white`;
      case 'error':
        return `${baseClasses} bg-light-error text-white`;
      case 'warning':
        return `${baseClasses} bg-light-yellow text-white`;
      case 'info':
      default:
        return `${baseClasses} bg-light-blue text-white`;
    }
  }

  removeToast(toast: Toast) {
    this.toastStore.removeToast(toast);
  }
}
