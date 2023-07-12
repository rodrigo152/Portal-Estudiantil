import { TestBed } from '@angular/core/testing';

import { ProfesorSService } from './profesor-s.service';

describe('ProfesorSService', () => {
  let service: ProfesorSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfesorSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
