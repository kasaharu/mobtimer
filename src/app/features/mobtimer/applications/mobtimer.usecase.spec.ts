import { TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { MobtimerUsecase } from './mobtimer.usecase';

describe('MobtimerUsecase', () => {
  let usecase: MobtimerUsecase;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: provideMockStore(),
    });
    usecase = TestBed.inject(MobtimerUsecase);
  });

  it('should be created', () => {
    expect(usecase).toBeTruthy();
  });
});
