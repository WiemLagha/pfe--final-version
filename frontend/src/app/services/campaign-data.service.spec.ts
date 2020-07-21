import { TestBed } from '@angular/core/testing';

import { CampaignDataService } from './campaign-data.service';

describe('CampaignDataService', () => {
  let service: CampaignDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CampaignDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
