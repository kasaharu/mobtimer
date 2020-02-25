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
    this.store$.dispatch(actions.saveMobTime({ mobTime }));
  }

  changeTime(minutes: number) {
    this.store$.dispatch(actions.saveMobTime({ mobTime: minutes }));
    this.repository.saveTime(minutes);
  }
}
