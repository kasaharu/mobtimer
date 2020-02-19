import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MobtimerModule } from './features/mobtimer/mobtimer.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ReactiveFormsModule, AppRoutingModule, SharedModule, MobtimerModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
