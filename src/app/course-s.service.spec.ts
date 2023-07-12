import { TestBed } from '@angular/core/testing';

import { CourseSService } from './course-s.service';

describe('CourseSService', () => {
  let service: CourseSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CourseSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
