import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MobtimerRepository {
  constructor() {}
  readonly storagePrefix = 'kasaharu/mobtimer';

  saveTime(minutes: number) {
    localStorage.setItem(`${this.storagePrefix}/minutes`, minutes.toString());
  }

  getTime(): number {
    const minutes = localStorage.getItem(`${this.storagePrefix}/minutes`);
    return minutes ? Number(minutes) : 0;
  }
}
