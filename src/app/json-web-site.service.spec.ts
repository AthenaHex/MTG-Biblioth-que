import { TestBed } from '@angular/core/testing';

import { JsonWebSiteService } from './json-web-site.service';

describe('JsonWebSiteService', () => {
  let service: JsonWebSiteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JsonWebSiteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
