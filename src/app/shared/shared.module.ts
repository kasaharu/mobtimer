import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './ui/header/header.component';
import { DisplayingTimePipe } from './ui/pipes/displaying-time.pipe';

@NgModule({
  declarations: [HeaderComponent, DisplayingTimePipe],
  imports: [CommonModule],
  exports: [HeaderComponent, DisplayingTimePipe],
})
export class SharedModule {}
