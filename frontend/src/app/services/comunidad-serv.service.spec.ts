import { TestBed } from '@angular/core/testing';

import { ComunidadServService } from './comunidad-serv.service';

describe('ComunidadServService', () => {
  let service: ComunidadServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComunidadServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
