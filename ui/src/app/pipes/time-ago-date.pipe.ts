import {Pipe, PipeTransform} from '@angular/core';
import {DateTime} from 'luxon';

@Pipe({
  name: 'timeAgoDate',
})
export class TimeAgoDatePipe implements PipeTransform {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  transform(value: Date | string | number, ..._args: unknown[]): string {
    if (!value) {
      return '';
    }

    return `${Math.round(DateTime.now().diff(DateTime.fromJSDate(new Date(value)), 'days').days)} days ago`;
  }
}
