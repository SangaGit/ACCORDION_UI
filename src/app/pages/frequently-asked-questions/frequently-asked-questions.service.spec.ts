import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { FrequentlyAskedQuestionsService } from './frequently-asked-questions.service';

describe('FrequentlyAskedQuestionsService', () => {
  let service: FrequentlyAskedQuestionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(FrequentlyAskedQuestionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have getQuetionsData method', () => {
    expect(service.getQuetionsData).toBeTruthy();
  });
});
