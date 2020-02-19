import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimerComponent implements OnInit {
  constructor() {}
  time = new FormControl(10);
  timer = new FormGroup({ time: this.time });

  ngOnInit(): void {
    this.time.setValue(10);
  }

  clickButton() {
    console.log(this.time.value);
  }
}
