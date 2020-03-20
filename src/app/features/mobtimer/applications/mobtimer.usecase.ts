import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { take } from 'rxjs/operators';
import { MobMember } from '../../../domain/mobbing/mob-member.vo';
import { MobTime } from '../../../domain/mobbing/mob-time.vo';
import { MobMemberRepository } from '../../../infrastructures/repositories/mob-member.repository';
import { MobTimeRepository } from '../../../infrastructures/repositories/mob-time.repository';
import { actions, selectStore } from '../store/index.store';

@Injectable({
  providedIn: 'root',
})
export class MobtimerUsecase {
  constructor(private store$: Store<{}>, private mobTimeRepo: MobTimeRepository, private mobMemberRepo: MobMemberRepository) {}
  intervalId: number | null = null;

  initialize() {
    const mobTime = this.mobTimeRepo.getTime();
    const mobMembers = this.mobMemberRepo.getMembers();
    this.store$.dispatch(actions.setMobbing({ mobTime, mobMembers }));
  }

  changeTime(minutes: number) {
    const mobTime = MobTime.create(minutes);
    this.store$.dispatch(actions.changeMobTime({ mobTime: { ...mobTime } }));
    this.mobTimeRepo.saveTime(mobTime);
  }

  createMember(name: string) {
    const mobMember = MobMember.create(name);
    this.store$.dispatch(actions.createMobMember({ mobMember: { ...mobMember } }));
    this.mobMemberRepo.createMemeber({ ...mobMember });
  }

  deleteMember(name: string) {
    this.store$.dispatch(actions.deleteMobMember({ memberName: name }));
    this.mobMemberRepo.deleteMember(name);
  }

  startMobbing() {
    this.store$.dispatch(actions.startMobbing());
  }

  stopMobbing() {
    this.store$.dispatch(actions.stopMobbing());
  }

  async startCountdown() {
    if (this.intervalId !== null) {
      return;
    }

    const mobTimes = await selectStore(this.store$, (state) => state.mobTime.count)
      .pipe(take(1))
      .toPromise();
    let seconds = mobTimes * 60;

    this.intervalId = window.setInterval(() => {
      this.store$.dispatch(actions.setCountdownSeconds({ countdownSeconds: seconds-- }));
      if (seconds < 0) {
        this.store$.dispatch(actions.stopMobbing());
      }
    }, 1000);
  }

  stopCountDown() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }

    this.intervalId = null;
  }
}
