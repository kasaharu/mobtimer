import { Injectable } from '@angular/core';
import { MobMemberProps } from '../../domain/mobbing/mob-member.vo';
import { storagePrefix } from '../helpers/storage-prefix';

@Injectable({
  providedIn: 'root',
})
export class MobMemberRepository {
  constructor() {}
  readonly storageKey = `${storagePrefix}/members`;

  createMemeber(member: MobMemberProps) {
    const savedMembers = this.getMembers();
    const newMembers = [member].concat(savedMembers);

    localStorage.setItem(this.storageKey, JSON.stringify(newMembers));
  }

  deleteMember(targetMemberName: string) {
    const savedMembers = this.getMembers();
    const newMembers = savedMembers.filter((member) => member.name !== targetMemberName);

    localStorage.setItem(this.storageKey, JSON.stringify(newMembers));
  }

  getMembers(): MobMemberProps[] {
    const savedMembersString = localStorage.getItem(this.storageKey);
    return savedMembersString ? (JSON.parse(savedMembersString) as MobMemberProps[]) : [];
  }
}
