import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { MobtimerRepository } from '../../../infrastructures/repositories/mobtimer.repository';
import { actions } from '../store/index.store';

@Injectable({
  providedIn: 'root',
})
export class MobtimerUsecase {
  constructor(private store$: Store<{}>, private repository: MobtimerRepository) {}

  initialize() {
    const mobTime = this.repository.getTime();
    const mobMembers = this.repository.getMembers();
    this.store$.dispatch(actions.setMobTimer({ mobTime, mobMembers }));
  }

  changeTime(minutes: number) {
    this.store$.dispatch(actions.saveMobTime({ mobTime: minutes }));
    this.repository.saveTime(minutes);
  }

  addMember(name: string) {
    this.store$.dispatch(actions.saveMobMember({ mobMember: name }));
    this.repository.saveMember(name);
  }
}
