import { TestBed } from '@angular/core/testing';

import { PeliculasServicesService } from './peliculas-services.service';

describe('PeliculasServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PeliculasServicesService = TestBed.get(PeliculasServicesService);
    expect(service).toBeTruthy();
  });
});
