import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { take } from 'rxjs/operators';
import { MobMember } from '../../../domain/mobbing/mob-member.vo';
import { MobTime } from '../../../domain/mobbing/mob-time.vo';
import { MobTimeRepository } from '../../../infrastructures/repositories/mob-time.repository';
import { MobtimerRepository } from '../../../infrastructures/repositories/mobtimer.repository';
import { actions, selectStore } from '../store/index.store';

@Injectable({
  providedIn: 'root',
})
export class MobtimerUsecase {
  constructor(private store$: Store<{}>, private repository: MobtimerRepository, private mobTimeRepo: MobTimeRepository) {}
  intervalId: number | null = null;

  initialize() {
    const mobTime = this.mobTimeRepo.getTime();
    const mobMembers = this.repository.getMembers();
    this.store$.dispatch(actions.setMobbing({ mobTime, mobMembers }));
  }

  changeTime(minutes: number) {
    const mobTime = MobTime.create(minutes);
    this.store$.dispatch(actions.saveMobTime({ mobTime: { ...mobTime } }));
    this.mobTimeRepo.saveTime(mobTime);
  }

  addMember(name: string) {
    const mobMember = MobMember.create(name);
    this.store$.dispatch(actions.saveMobMember({ mobMember: { ...mobMember } }));
    this.repository.saveMember({ ...mobMember });
  }

  deleteMember(name: string) {
    this.store$.dispatch(actions.deleteMobMember({ memberName: name }));
    this.repository.deleteMember(name);
  }

  startMobbing() {
    this.store$.dispatch(actions.startMobbing());
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
