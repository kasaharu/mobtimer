import { TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { MobtimerQuery } from './mobtimer.query';

describe('MobtimerQuery', () => {
  let query: MobtimerQuery;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: provideMockStore(),
    });
    query = TestBed.inject(MobtimerQuery);
  });

  it('should be created', () => {
    expect(query).toBeTruthy();
  });
});
