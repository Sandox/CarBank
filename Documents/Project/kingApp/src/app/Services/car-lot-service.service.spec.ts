import { TestBed } from '@angular/core/testing';

import { CarLotServiceService } from './car-lot-service.service';

describe('CarLotServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CarLotServiceService = TestBed.get(CarLotServiceService);
    expect(service).toBeTruthy();
  });
});
