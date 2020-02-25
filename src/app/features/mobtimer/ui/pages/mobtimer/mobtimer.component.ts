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

  readonly mobtimer$ = this.query.mobtimer$;
  members: string[] = ['test', 'test2', 'test3'];

  ngOnInit(): void {
    this.usecase.initialize();
  }

  changeTime(time: number) {
    this.usecase.changeTime(time);
  }
}
