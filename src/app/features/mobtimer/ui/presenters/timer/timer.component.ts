import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimerComponent implements OnInit {
  constructor() {}
  @Input()
  mobTime!: number;

  time = new FormControl();
  timer = new FormGroup({ time: this.time });

  ngOnInit(): void {
    this.time.setValue(this.mobTime);
  }

  clickButton() {
    console.log(this.time.value);
  }
}
