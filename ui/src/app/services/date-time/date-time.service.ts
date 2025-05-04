import {Injectable} from '@angular/core';
import {DateTime} from 'luxon';

@Injectable({
  providedIn: 'root',
})
export class DateTimeService {
  static formatDateTimeString(dateString: string) {
    return DateTime.fromJSDate(new Date(dateString)).toFormat('dd LLL yyyy (HH:mm)');
  }
}
