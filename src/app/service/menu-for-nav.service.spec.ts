import { TestBed } from '@angular/core/testing';

import { MenuForNavService } from './menu-for-nav.service';

describe('MenuForNavService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MenuForNavService = TestBed.get(MenuForNavService);
    expect(service).toBeTruthy();
  });
});
