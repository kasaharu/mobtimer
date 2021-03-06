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

    this.store$.dispatch(actions.startMobbing());
    const mobTimes = await selectStore(this.store$, (state) => state.mobTime.count)
      .pipe(take(1))
      .toPromise();
    const initialSeconds = mobTimes * 60;
    this.countdown(initialSeconds);
  }

  async resumeCountdown() {
    if (this.intervalId !== null) {
      return;
    }

    this.store$.dispatch(actions.startMobbing());
    const countdownSeconds = await selectStore(this.store$, (state) => state.countdownSeconds)
      .pipe(take(1))
      .toPromise();
    this.countdown(countdownSeconds);
  }

  pauseCountDown() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }

    this.store$.dispatch(actions.pauseMobbing());
    this.intervalId = null;
  }

  stopCountDown() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }

    this.store$.dispatch(actions.stopMobbing());
    this.intervalId = null;
  }

  private countdown(initialSeconds: number) {
    let seconds = initialSeconds;
    this.store$.dispatch(actions.setCountdownSeconds({ countdownSeconds: seconds-- }));
    this.intervalId = window.setInterval(() => {
      this.store$.dispatch(actions.setCountdownSeconds({ countdownSeconds: seconds-- }));
      if (seconds < 0) {
        this.stopCountDown();
      }
    }, 1000);
  }
}
