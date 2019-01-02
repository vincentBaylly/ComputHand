import { Injectable } from '@angular/core';
import { Mail } from '../../model/mail/mail';
import { MailConfig } from '../../model/mail/mail-config';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders(
    {
      'Content-Type': 'text/html; charset=utf-8',
      'Authorization': 'Basic ' + MailConfig.apiKey,
      'Access-Control-Allow-Origin': '*',
    }
  ),
  params:new HttpParams()
};

@Injectable({
  providedIn: 'root'
})
export class MailService {

  constructor(private http: HttpClient) { }

  sendEmail(contactMail: Mail) : Observable<Object>{

    if (contactMail.from && contactMail.subject && contactMail.text) {
      let body = '';
      httpOptions.params = new HttpParams()
      .set('from', contactMail.from)
      .set('to', contactMail.to)
      .set('subject', contactMail.subject)
      .set('text', contactMail.text);

      return this.http.post('https://api.mailgun.net/v3/' + MailConfig.domain + '/messages', body, httpOptions)
        .pipe(
          map(result => result),
          catchError(error => error)
        );
    }
  }
}
