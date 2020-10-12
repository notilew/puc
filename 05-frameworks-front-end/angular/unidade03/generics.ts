export class MailSender<T> {
    send(mail: T) {
        console.log('Sending...', mail);
    }
}

export class CardBilling { }

const billing = new MailSender<CardBilling>();

billing.send(new CardBilling());