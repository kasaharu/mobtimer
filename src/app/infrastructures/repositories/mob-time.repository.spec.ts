import { TestBed } from '@angular/core/testing';

import { MobTimeRepository } from './mob-time.repository';

describe('MobTimeRepository', () => {
  let repository: MobTimeRepository;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    repository = TestBed.inject(MobTimeRepository);
  });

  it('should be created', () => {
    expect(repository).toBeTruthy();
  });
});
