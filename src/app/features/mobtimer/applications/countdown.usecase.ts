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
    const initialSeconds = mobTimes * 60;
    this.countdown(initialSeconds);
  }

  async resumeCountdown() {
    if (this.intervalId !== null) {
      return;
    }

    const countdownSeconds = await selectStore(this.store$, (state) => state.countdownSeconds)
      .pipe(take(1))
      .toPromise();
    this.countdown(countdownSeconds);
  }

  stopCountDown() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }

    this.intervalId = null;
  }

  private countdown(initialSeconds: number) {
    let seconds = initialSeconds;
    this.intervalId = window.setInterval(() => {
      this.store$.dispatch(actions.setCountdownSeconds({ countdownSeconds: seconds-- }));
      if (seconds < 0) {
        this.store$.dispatch(actions.pauseMobbing());
      }
    }, 1000);
  }
}
