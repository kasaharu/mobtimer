import { TestBed } from '@angular/core/testing';

import { MobMemberService } from './mob-member.service';

describe('MobMemberService', () => {
  let service: MobMemberService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MobMemberService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
