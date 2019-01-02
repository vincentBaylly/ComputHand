import { Component, OnInit } from '@angular/core';
import { MailService } from '../../service/mail/mail.service';
import { createMail } from '../../model/mail/mail';
import { MailGunResponse } from '../../model/mail/mailgun-response';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.less']
})
export class ContactComponent implements OnInit {

  private mailService: MailService;

  showSuccessMessage: boolean;
  errorMessage: string;

  name: string;
  email: string;
  message: string;

  constructor(mailService: MailService) {
    this.mailService = mailService;
  }

  ngOnInit() {
    this.showSuccessMessage = false;
  }

  /**
   * Process the form we have. Send to whatever backend
   * Only alerting for now
   */
  processForm() {
    let mailToSend = createMail({from: this.email, name: this.name, text: this.message});
    this.mailService.sendEmail(mailToSend).subscribe(
      data => {

        let mailGunResponse = <MailGunResponse>data
        if(mailGunResponse.message === 'Queued. Thank you.'){
          this.showSuccessMessage = true;
        }
      },
      error =>  this.errorMessage = <any>error
    );
  }

}
