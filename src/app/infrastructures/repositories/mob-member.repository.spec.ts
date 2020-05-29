import { TestBed } from '@angular/core/testing';

import { MobMemberRepository } from './mob-member.repository';

describe('MobMemberRepository', () => {
  let repository: MobMemberRepository;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    repository = TestBed.inject(MobMemberRepository);
  });

  it('should be created', () => {
    expect(repository).toBeTruthy();
  });
});
