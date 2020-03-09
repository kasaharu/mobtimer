import { Injectable } from '@angular/core';
import { MobMemberProps } from '../../domain/mobbing/mob-member.vo';

@Injectable({
  providedIn: 'root',
})
export class MobtimerRepository {
  constructor() {}
  readonly storagePrefix = 'kasaharu/mobtimer';

  saveMember(member: MobMemberProps) {
    const savedMembersString = localStorage.getItem(`${this.storagePrefix}/members`);
    const savedMembers = savedMembersString ? JSON.parse(savedMembersString) : [];
    const newMembers = [member].concat(savedMembers);

    localStorage.setItem(`${this.storagePrefix}/members`, JSON.stringify(newMembers));
  }

  deleteMember(targetMemberName: string) {
    const savedMembersString = localStorage.getItem(`${this.storagePrefix}/members`);
    const savedMembers: MobMemberProps[] = savedMembersString ? JSON.parse(savedMembersString) : [];
    const newMembers = savedMembers.filter((member) => member.name !== targetMemberName);

    localStorage.setItem(`${this.storagePrefix}/members`, JSON.stringify(newMembers));
  }

  getMembers(): MobMemberProps[] {
    const savedMembersString = localStorage.getItem(`${this.storagePrefix}/members`);
    return savedMembersString ? (JSON.parse(savedMembersString) as MobMemberProps[]) : [];
  }
}
