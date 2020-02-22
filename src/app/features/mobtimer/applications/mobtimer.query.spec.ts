import { TestBed } from '@angular/core/testing';

import { MobtimerQuery } from './mobtimer.query';

describe('MobtimerQuery', () => {
  let query: MobtimerQuery;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    query = TestBed.inject(MobtimerQuery);
  });

  it('should be created', () => {
    expect(query).toBeTruthy();
  });
});