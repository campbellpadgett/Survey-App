










const sendgrid = require('sendgrid')
const helper = sendgrid.mail
const keys = require('../config/keys')

class Mailer extends helper.Mail {
    constructor({ subject, recipients }, htmlContent) {
        super()
        this.from_email = new helper.Email(keys.email) 
        this.subject = subject
        this.body = new helper.Content('text/html', htmlContent)
        this.recipients = this.formatAddresses(recipients)
    }
}

module.exports = Mailer