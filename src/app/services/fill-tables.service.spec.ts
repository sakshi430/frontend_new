import { TestBed } from '@angular/core/testing';

import { FillTablesService } from './fill-tables.service';

describe('FillTablesService', () => {
  let service: FillTablesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FillTablesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
