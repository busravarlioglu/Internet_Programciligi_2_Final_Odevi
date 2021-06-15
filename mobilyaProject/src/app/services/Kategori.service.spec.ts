/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { KategoriService } from './Kategori.service';

describe('Service: Kategori', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KategoriService]
    });
  });

  it('should ...', inject([KategoriService], (service: KategoriService) => {
    expect(service).toBeTruthy();
  }));
});
