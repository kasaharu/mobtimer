import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { take } from 'rxjs/operators';
import { actions, selectStore } from '../store/index.store';

@Injectable({
  providedIn: 'root',
})
export class CountdownUsecase {
  constructor(private store$: Store<{}>) {}
  intervalId: number | null = null;

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
