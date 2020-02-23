import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectStore } from '../store/index.store';

@Injectable({
  providedIn: 'root',
})
export class MobtimerQuery {
  constructor(private store$: Store<{}>) {}
  readonly mobtimer$ = selectStore(this.store$, (state) => state);
}
