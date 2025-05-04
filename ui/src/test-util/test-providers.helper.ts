import {provideHttpClient} from '@angular/common/http';
import {provideHttpClientTesting} from '@angular/common/http/testing';
import {ConfirmationService, MessageService} from 'primeng/api';

export const testProviders = [
  provideHttpClient(),
  provideHttpClientTesting(),
  {
    provide: ConfirmationService,
    useValue: {},
  },
  {
    provide: MessageService,
    useValue: {},
  },
];
