import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MobtimerQuery } from '../../../applications/mobtimer.query';
import { MobtimerUsecase } from '../../../applications/mobtimer.usecase';

@Component({
  selector: 'app-mobtimer',
  templateUrl: './mobtimer.component.html',
  styleUrls: ['./mobtimer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MobtimerComponent implements OnInit {
  constructor(private usecase: MobtimerUsecase, private query: MobtimerQuery) {}
  time = 10;
  time$ = new BehaviorSubject<number>(0);
  intervalId: number | null = null;

  readonly mobTime$ = this.query.mobTime$;
  readonly mobMembers$ = this.query.mobMembers$;

  ngOnInit(): void {
    this.usecase.initialize();
  }

  changeTime(time: number) {
    this.usecase.changeTime(time);
  }

  addMember(name: string) {
    this.usecase.addMember(name);
  }

  startMobbing() {
    this.startCountdown();
  }

  private startCountdown() {
    if (this.intervalId !== null) {
      return;
    }

    this.intervalId = window.setInterval(() => {
      this.time$.next(this.time--);
      if (this.time < 0) {
        this.stopCountDown();
      }
    }, 1000);
  }

  private stopCountDown() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }

    this.intervalId = null;
  }
}
