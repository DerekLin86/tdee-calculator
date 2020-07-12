import { TestBed } from '@angular/core/testing';

import { SaleforceApiService } from './saleforce-api.service';

describe('SaleforceApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SaleforceApiService = TestBed.get(SaleforceApiService);
    expect(service).toBeTruthy();
  });
});
