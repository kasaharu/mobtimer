import { Pipe, PipeTransform } from '@angular/core';

const zeroPadding = (num: number): string => {
  return num.toString().padStart(2, '0');
};

@Pipe({
  name: 'displayingTime',
})
export class DisplayingTimePipe implements PipeTransform {
  transform(time: { minutes: number; seconds: number }): string {
    return `${zeroPadding(time.minutes)}:${zeroPadding(time.seconds)}`;
  }
}
