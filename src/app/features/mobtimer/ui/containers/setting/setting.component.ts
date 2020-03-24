import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MobtimerQuery } from '../../../applications/mobtimer.query';
import { MobtimerUsecase } from '../../../applications/mobtimer.usecase';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SettingComponent implements OnInit {
  constructor(private mobtimerUsecase: MobtimerUsecase, private query: MobtimerQuery) {}

  readonly mobTime$ = this.query.mobTime$;
  readonly mobMembers$ = this.query.mobMembers$;

  ngOnInit(): void {}

  changeTime(time: number) {
    this.mobtimerUsecase.changeTime(time);
  }

  addMember(name: string) {
    this.mobtimerUsecase.createMember(name);
  }

  deleteMember(name: string) {
    this.mobtimerUsecase.deleteMember(name);
  }
}
