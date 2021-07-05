import { TestBed } from '@angular/core/testing';

import { GuardMenuGuard } from './guard-menu.guard';

describe('GuardMenuGuard', () => {
  let guard: GuardMenuGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GuardMenuGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
