import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
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
  readonly isMobbing$ = selectStore(this.store$, (state) => state.isMobbing);
  readonly countdownValue$ = selectStore(this.store$, (state) => {
    // NOTE: countdownSeconds を 分/秒 に分解:
    if (state.countdownSeconds === 0) {
      return { minutes: 0, seconds: 0 };
    }

    const seconds = state.countdownSeconds % 60;
    const minutes = (state.countdownSeconds - seconds) / 60;

    return { minutes, seconds };
  });
  readonly readyMobbing$ = selectStore(this.store$, (state) => state.mobTime.count > 0 && state.mobMembers.length > 0);
}
