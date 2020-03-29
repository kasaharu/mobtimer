import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CountdownUsecase } from '../../../applications/countdown.usecase';
import { MobtimerQuery } from '../../../applications/mobtimer.query';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimerComponent implements OnInit {
  constructor(private countdownUsecase: CountdownUsecase, private query: MobtimerQuery) {}

  readonly isMobbing$ = this.query.isMobbing$;
  readonly readyMobbing$ = this.query.readyMobbing$;
  readonly pausedMobbing$ = this.query.pausedMobbing$;
  readonly countdownValue$ = this.query.countdownValue$;

  ngOnInit(): void {}

  startMobbing() {
    this.countdownUsecase.startCountdown();
  }

  pauseMobbing() {
    this.countdownUsecase.pauseCountDown();
  }

  resumeMobbing() {
    this.countdownUsecase.resumeCountdown();
  }
}
