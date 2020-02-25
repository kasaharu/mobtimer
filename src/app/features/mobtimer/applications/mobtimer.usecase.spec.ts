import { TestBed } from '@angular/core/testing';

import { MobtimerUsecase } from './mobtimer.usecase';

describe('MobtimerUsecase', () => {
  let usecase: MobtimerUsecase;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    usecase = TestBed.inject(MobtimerUsecase);
  });

  it('should be created', () => {
    expect(usecase).toBeTruthy();
  });
});