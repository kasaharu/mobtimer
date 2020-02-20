import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobtimer',
  templateUrl: './mobtimer.component.html',
  styleUrls: ['./mobtimer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MobtimerComponent implements OnInit {
  constructor() {}
  members: string[] = ['test', 'test2', 'test3'];

  ngOnInit(): void {}
}
