import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from '../../shared/shared.module';
import { default as reducer, featureName } from './store/index.store';
import { SettingComponent } from './ui/containers/setting/setting.component';
import { TimerComponent } from './ui/containers/timer/timer.component';
import { MobtimerComponent } from './ui/pages/mobtimer/mobtimer.component';
import { MembersComponent } from './ui/presenters/members/members.component';
import { TimeComponent } from './ui/presenters/time/time.component';

@NgModule({
  declarations: [MobtimerComponent, TimeComponent, MembersComponent, SettingComponent, TimerComponent],
  imports: [CommonModule, ReactiveFormsModule, StoreModule.forFeature(featureName, reducer), SharedModule],
})
export class MobtimerModule {}
