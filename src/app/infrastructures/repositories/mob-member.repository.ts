import { Injectable } from '@angular/core';
import { MobMemberProps } from '../../domain/mobbing/mob-member.vo';
import { storagePrefix } from '../helpers/storage-prefix';

@Injectable({
  providedIn: 'root',
})
export class MobMemberRepository {
  constructor() {}
  readonly storageKey = `${storagePrefix}/members`;

  saveMember(member: MobMemberProps) {
    const savedMembersString = localStorage.getItem(this.storageKey);
    const savedMembers = savedMembersString ? JSON.parse(savedMembersString) : [];
    const newMembers = [member].concat(savedMembers);

    localStorage.setItem(this.storageKey, JSON.stringify(newMembers));
  }

  deleteMember(targetMemberName: string) {
    const savedMembersString = localStorage.getItem(this.storageKey);
    const savedMembers: MobMemberProps[] = savedMembersString ? JSON.parse(savedMembersString) : [];
    const newMembers = savedMembers.filter((member) => member.name !== targetMemberName);

    localStorage.setItem(this.storageKey, JSON.stringify(newMembers));
  }

  getMembers(): MobMemberProps[] {
    const savedMembersString = localStorage.getItem(this.storageKey);
    return savedMembersString ? (JSON.parse(savedMembersString) as MobMemberProps[]) : [];
  }
}
