import { MailConfig } from '../../model/mail/mail-config';

export interface Mail {
  from: string;
  to?: string;
  name?: string;
  subject?: string;
  text?: string;
}

/**
* Create the email to send
*/
export function createMail(mail: Mail): { from: string; name: string; text: string; } {
  let emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
  let mailToSend = { from: '', to: '', name: '', subject: '', text: '' };

  try {

    mailToSend.to = MailConfig.to;

    if (mail.from.match(emailPattern)) {
      mailToSend.from = mail.from;
    } else {
      throw 'Error Validaton: the email provide is not valid!';
    }

    if (mail.name.length > 3) {
      mailToSend.subject = MailConfig.subject + ' ' + mail.name;
    } else {
      throw 'Error Validaton: Name is required and needs to be at least 3 characters long!';
    }

    if(mail.text.length < 150){
      mailToSend.text = mail.text;
    }else{
      throw 'Error Validaton: The mail text is to long!';
    }

  }
  catch (e) {
    console.error(e);
  }

  return mailToSend;
}
