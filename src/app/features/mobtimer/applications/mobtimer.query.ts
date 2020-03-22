import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { MobbingStateType } from '../../../domain/mobbing/mobbing';
import { selectStore } from '../store/index.store';

@Injectable({
  providedIn: 'root',
})
export class MobtimerQuery {
  constructor(private store$: Store<{}>) {}
  readonly mobTime$ = selectStore(this.store$, (state) => {
    return state.mobTime.count;
  });
  readonly mobMembers$ = selectStore(this.store$, (state) => state.mobMembers.map((member) => member.name));
  readonly isMobbing$ = selectStore(this.store$, (state) => state.mobbingState === MobbingStateType.IsMobbing);
  readonly readyMobbing$ = selectStore(this.store$, (state) => state.mobbingState === MobbingStateType.IsReady);
  readonly pausedMobbing$ = selectStore(this.store$, (state) => state.mobbingState === MobbingStateType.Paused);

  readonly countdownValue$ = selectStore(this.store$, (state) => {
    // NOTE: countdownSeconds を 分/秒 に分解:
    if (state.countdownSeconds === 0) {
      return { minutes: 0, seconds: 0 };
    }

    const seconds = state.countdownSeconds % 60;
    const minutes = (state.countdownSeconds - seconds) / 60;

    return { minutes, seconds };
  });
}
