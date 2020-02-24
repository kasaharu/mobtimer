import { TestBed } from '@angular/core/testing';

import { MobtimerRepository } from './mobtimer.repository';

describe('MobtimerRepository', () => {
  let repository: MobtimerRepository;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    repository = TestBed.inject(MobtimerRepository);
  });

  it('should be created', () => {
    expect(repository).toBeTruthy();
  });
});