import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MobtimerComponent } from './ui/pages/mobtimer/mobtimer.component';
import { TimerComponent } from './ui/presenters/timer/timer.component';

@NgModule({
  declarations: [MobtimerComponent, TimerComponent],
  imports: [
    CommonModule,
  ],
})
export class MobtimerModule { }
