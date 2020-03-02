import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
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

  readonly mobTime$ = this.query.mobTime$;
  readonly mobMembers$ = this.query.mobMembers$;
  readonly isMobbing$ = this.query.isMobbing$;
  readonly countdownValue$ = this.query.countdownValue$;
  readonly readyMobbing$ = this.query.readyMobbing$;

  ngOnInit(): void {
    this.usecase.initialize();
    this.isMobbing$.subscribe((isMobbing) => {
      if (isMobbing) {
        this.usecase.startCountdown();
      } else {
        this.usecase.stopCountDown();
      }
    });
  }

  changeTime(time: number) {
    this.usecase.changeTime(time);
  }

  addMember(name: string) {
    this.usecase.addMember(name);
  }

  startMobbing() {
    this.usecase.startMobbing();
  }
}
