import { TestBed } from '@angular/core/testing';
import { WikipediaService } from './wikipedia';
import { provideHttpClient } from '@angular/common/http';

describe('WikipediaService', () => {
  let service: WikipediaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient()]
    });
    service = TestBed.inject(WikipediaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});