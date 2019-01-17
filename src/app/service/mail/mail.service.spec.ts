import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MailService } from './mail.service';

describe('MailService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports:[ HttpClientTestingModule ]
  }));

  it('should be created', () => {
    const service: MailService = TestBed.get(MailService);
    expect(service).toBeTruthy();
  });
});
