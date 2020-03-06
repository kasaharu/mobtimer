import { Injectable } from '@angular/core';
import { MobMember } from '../../domain/mobbing/mob-member.vo';
import { MobTime, MobTimeProps } from '../../domain/mobbing/mob-time.vo';

@Injectable({
  providedIn: 'root',
})
export class MobtimerRepository {
  constructor() {}
  readonly storagePrefix = 'kasaharu/mobtimer';

  saveTime(minutes: MobTimeProps) {
    localStorage.setItem(`${this.storagePrefix}/minutes`, JSON.stringify(minutes));
  }

  getTime(): MobTimeProps {
    const minutes = localStorage.getItem(`${this.storagePrefix}/minutes`);
    return minutes ? (JSON.parse(minutes) as MobTimeProps) : { count: MobTime.minimumTime };
  }

  saveMember(member: MobMember) {
    const savedMembersString = localStorage.getItem(`${this.storagePrefix}/members`);
    const savedMembers = savedMembersString ? JSON.parse(savedMembersString) : [];
    const newMembers = [member].concat(savedMembers);

    localStorage.setItem(`${this.storagePrefix}/members`, JSON.stringify(newMembers));
  }

  deleteMember(targetMemberName: string) {
    const savedMembersString = localStorage.getItem(`${this.storagePrefix}/members`);
    const savedMembers: MobMember[] = savedMembersString ? JSON.parse(savedMembersString) : [];
    const newMembers = savedMembers.filter((member) => member.name !== targetMemberName);

    localStorage.setItem(`${this.storagePrefix}/members`, JSON.stringify(newMembers));
  }

  getMembers(): MobMember[] {
    const savedMembersString = localStorage.getItem(`${this.storagePrefix}/members`);
    return savedMembersString ? (JSON.parse(savedMembersString) as MobMember[]) : [];
  }
}
