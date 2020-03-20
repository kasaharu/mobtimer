import { TestBed } from '@angular/core/testing';

import { CountdownUsecase } from './countdown.usecase';

describe('CountdownUsecase', () => {
  let usecase: CountdownUsecase;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    usecase = TestBed.inject(CountdownUsecase);
  });

  it('should be created', () => {
    expect(usecase).toBeTruthy();
  });
});