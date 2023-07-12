import { TestBed } from '@angular/core/testing';

import { StudentsSService } from './students-s.service';

describe('StudentsSService', () => {
  let service: StudentsSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentsSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
