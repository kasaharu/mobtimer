import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CountdownUsecase } from '../../../applications/countdown.usecase';
import { MobtimerQuery } from '../../../applications/mobtimer.query';
import { MobtimerUsecase } from '../../../applications/mobtimer.usecase';

@Component({
  selector: 'app-mobtimer',
  templateUrl: './mobtimer.component.html',
  styleUrls: ['./mobtimer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MobtimerComponent implements OnInit {
  constructor(private mobtimerUsecase: MobtimerUsecase, private countdownUsecase: CountdownUsecase, private query: MobtimerQuery) {}

  readonly mobTime$ = this.query.mobTime$;
  readonly mobMembers$ = this.query.mobMembers$;
  readonly isMobbing$ = this.query.isMobbing$;
  readonly readyMobbing$ = this.query.readyMobbing$;
  readonly pausedMobbing$ = this.query.pausedMobbing$;
  readonly countdownValue$ = this.query.countdownValue$;

  ngOnInit(): void {
    this.mobtimerUsecase.initialize();
  }

  changeTime(time: number) {
    this.mobtimerUsecase.changeTime(time);
  }

  addMember(name: string) {
    this.mobtimerUsecase.createMember(name);
  }

  deleteMember(name: string) {
    this.mobtimerUsecase.deleteMember(name);
  }

  startMobbing() {
    this.mobtimerUsecase.startMobbing();
    this.countdownUsecase.startCountdown();
  }

  pauseMobbing() {
    this.mobtimerUsecase.pauseMobbing();
    this.countdownUsecase.pauseCountDown();
  }

  resumeMobbing() {
    this.countdownUsecase.resumeCountdown();
  }
}
