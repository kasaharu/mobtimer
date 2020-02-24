import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MobtimerQuery } from '../../../applications/mobtimer.query';

@Component({
  selector: 'app-mobtimer',
  templateUrl: './mobtimer.component.html',
  styleUrls: ['./mobtimer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MobtimerComponent implements OnInit {
  constructor(private query: MobtimerQuery) {}
  readonly mobtimer$ = this.query.mobtimer$;
  members: string[] = ['test', 'test2', 'test3'];

  ngOnInit(): void {}

  changeTime(time: number) {
    console.log(time);
  }
}
