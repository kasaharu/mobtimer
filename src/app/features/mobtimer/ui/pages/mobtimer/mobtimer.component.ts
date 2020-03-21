import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MobtimerQuery } from '../../../applications/mobtimer.query';
import { MobtimerUsecase } from '../../../applications/mobtimer.usecase';
import { CountdownUsecase } from '../../../applications/countdown.usecase';

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
  readonly countdownValue$ = this.query.countdownValue$;
  readonly readyMobbing$ = this.query.readyMobbing$;

  ngOnInit(): void {
    this.mobtimerUsecase.initialize();
    this.isMobbing$.subscribe((isMobbing) => {
      if (isMobbing) {
        this.countdownUsecase.startCountdown();
      } else {
        this.countdownUsecase.stopCountDown();
      }
    });
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
  }

  stopMobbing() {
    this.mobtimerUsecase.stopMobbing();
  }
}
