import { Injectable } from '@angular/core';
import { MobMemberRepository } from '../../infrastructures/repositories/mob-member.repository';

@Injectable({
  providedIn: 'root',
})
export class MobMemberService {
  constructor() {}

  static exists(name: string) {
    const repo = new MobMemberRepository();
    const members = repo.getMembers();
    return members.map((member) => member.name).includes(name);
  }
}
