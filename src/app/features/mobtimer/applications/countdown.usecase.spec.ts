import { TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { CountdownUsecase } from './countdown.usecase';

describe('CountdownUsecase', () => {
  let usecase: CountdownUsecase;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: provideMockStore(),
    });
    usecase = TestBed.inject(CountdownUsecase);
  });

  it('should be created', () => {
    expect(usecase).toBeTruthy();
  });
});
