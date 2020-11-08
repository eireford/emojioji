import { TestBed } from '@angular/core/testing';

import { OjiService } from './oji.service';

describe('OjiService', () => {
  let service: OjiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OjiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
