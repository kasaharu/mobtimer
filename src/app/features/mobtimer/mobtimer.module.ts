import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from '../../shared/shared.module';
import { default as reducer, featureName } from './store/index.store';
import { MobtimerComponent } from './ui/pages/mobtimer/mobtimer.component';
import { MembersComponent } from './ui/presenters/members/members.component';
import { TimerComponent } from './ui/presenters/timer/timer.component';

@NgModule({
  declarations: [MobtimerComponent, TimerComponent, MembersComponent],
  imports: [CommonModule, ReactiveFormsModule, StoreModule.forFeature(featureName, reducer), SharedModule],
})
export class MobtimerModule {}
