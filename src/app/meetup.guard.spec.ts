import { TestBed, async, inject } from '@angular/core/testing';

import { MeetupGuard } from './meetup.guard';

describe('MeetupGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MeetupGuard]
    });
  });

  it('should ...', inject([MeetupGuard], (guard: MeetupGuard) => {
    expect(guard).toBeTruthy();
  }));
});
