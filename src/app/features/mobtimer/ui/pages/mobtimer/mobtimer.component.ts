import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MobtimerUsecase } from '../../../applications/mobtimer.usecase';

@Component({
  selector: 'app-mobtimer',
  templateUrl: './mobtimer.component.html',
  styleUrls: ['./mobtimer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MobtimerComponent implements OnInit {
  constructor(private mobtimerUsecase: MobtimerUsecase) {}

  ngOnInit(): void {
    this.mobtimerUsecase.initialize();
  }
}
