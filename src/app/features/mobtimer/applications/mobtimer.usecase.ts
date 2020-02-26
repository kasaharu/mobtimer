import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { MobMember } from '../../../domain/mobbing/mob-member.vo';
import { MobTime } from '../../../domain/mobbing/mob-time.vo';
import { MobtimerRepository } from '../../../infrastructures/repositories/mobtimer.repository';
import { actions } from '../store/index.store';

@Injectable({
  providedIn: 'root',
})
export class MobtimerUsecase {
  constructor(private store$: Store<{}>, private repository: MobtimerRepository) {}

  initialize() {
    const time = this.repository.getTime();
    const members = this.repository.getMembers();
    const mobTime = MobTime.create(time);
    const mobMembers = members.map((member) => MobMember.create(member));
    this.store$.dispatch(actions.setMobbing({ mobTime, mobMembers }));
  }

  changeTime(minutes: number) {
    const mobTime = MobTime.create(minutes);
    this.store$.dispatch(actions.saveMobTime({ mobTime }));
    this.repository.saveTime(minutes);
  }

  addMember(name: string) {
    const mobMember = MobMember.create(name);
    this.store$.dispatch(actions.saveMobMember({ mobMember }));
    this.repository.saveMember(name);
  }
}
