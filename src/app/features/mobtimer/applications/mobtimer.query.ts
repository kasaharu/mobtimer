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
  readonly countdownValue$ = selectStore(this.store$, (state) => state.countdownValue);
  readonly readyMobbing$ = selectStore(this.store$, (state) => state.mobTime.count > 0 && state.mobMembers.length > 0);
}
