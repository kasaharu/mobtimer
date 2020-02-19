import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MobtimerComponent } from './features/mobtimer/ui/pages/mobtimer/mobtimer.component';

const routes: Routes = [{ path: '', component: MobtimerComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
