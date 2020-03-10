import { Injectable } from '@angular/core';
import { MobTime, MobTimeProps } from '../../domain/mobbing/mob-time.vo';
import { storagePrefix } from '../helpers/storage-prefix';

@Injectable({
  providedIn: 'root',
})
export class MobTimeRepository {
  constructor() {}
  readonly storageKey = `${storagePrefix}/minutes`;

  saveTime(minutes: MobTimeProps) {
    localStorage.setItem(this.storageKey, JSON.stringify(minutes));
  }

  getTime(): MobTimeProps {
    const minutes = localStorage.getItem(this.storageKey);
    return minutes ? (JSON.parse(minutes) as MobTimeProps) : { count: MobTime.minimumTime };
  }
}
