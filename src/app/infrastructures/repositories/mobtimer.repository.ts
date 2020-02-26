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

  saveMember(member: string) {
    const savedMembersString = localStorage.getItem(`${this.storagePrefix}/members`);
    const savedMembers = savedMembersString ? JSON.parse(savedMembersString) : [];
    const newMembers = [member].concat(savedMembers);

    localStorage.setItem(`${this.storagePrefix}/members`, JSON.stringify(newMembers));
  }

  getMembers(): string[] {
    const savedMembersString = localStorage.getItem(`${this.storagePrefix}/members`);
    return savedMembersString ? JSON.parse(savedMembersString) : [];
  }
}
