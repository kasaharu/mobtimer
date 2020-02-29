import { Injectable } from '@angular/core';
import { MobtimerRepository } from '../../infrastructures/repositories/mobtimer.repository';

@Injectable({
  providedIn: 'root',
})
export class MobMemberService {
  constructor() {}

  static exists(name: string) {
    const repo = new MobtimerRepository();
    const members = repo.getMembers();
    return members.includes(name);
  }
}
