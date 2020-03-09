import { Injectable } from '@angular/core';
import { MobTime, MobTimeProps } from '../../domain/mobbing/mob-time.vo';

@Injectable({
  providedIn: 'root',
})
export class MobTimeRepository {
  constructor() {}
  readonly storagePrefix = 'kasaharu/mobtimer';

  saveTime(minutes: MobTimeProps) {
    localStorage.setItem(`${this.storagePrefix}/minutes`, JSON.stringify(minutes));
  }

  getTime(): MobTimeProps {
    const minutes = localStorage.getItem(`${this.storagePrefix}/minutes`);
    return minutes ? (JSON.parse(minutes) as MobTimeProps) : { count: MobTime.minimumTime };
  }
}
