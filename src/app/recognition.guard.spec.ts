import { TestBed } from '@angular/core/testing';

import { RecognitionGuard } from './recognition.guard';

describe('RecognitionGuard', () => {
  let guard: RecognitionGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RecognitionGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
