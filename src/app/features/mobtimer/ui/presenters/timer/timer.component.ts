import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { distinctUntilChanged } from 'rxjs/operators';

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
  @Output()
  changeTime = new EventEmitter<number>();

  time = new FormControl();
  timer = new FormGroup({ time: this.time });

  ngOnInit(): void {
    this.time.setValue(this.mobTime, { emitEvent: false });
    this.time.valueChanges.pipe(distinctUntilChanged()).subscribe((time) => this.changeTime.emit(time));
  }
}
