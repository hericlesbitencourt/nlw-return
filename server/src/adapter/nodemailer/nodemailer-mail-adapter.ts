import { MailAdapter, SendMailData } from '../mail-adapter';
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
    host: 'smtp.mailtrap.io',
    port: 2525,
    auth: {
      user: '0da6479a53f5a3',
      pass: '4ff9479f4d72d8',
    },
  });

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({ subject, body }: SendMailData) {
        await transport.sendMail({
        from: 'Feedget <oi@feedget.com.br>',
        to: 'Hericles Bitencourt <hericlesbitencourt@icloud.com>',
        subject: subject,
        html: body
    })

    }
}