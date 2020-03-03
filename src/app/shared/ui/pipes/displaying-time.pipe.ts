import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'displayingTime',
})
export class DisplayingTimePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
