







const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export function validateEmails(emails) {
    const invalidEmails = emails.split(',').map(email => email.trim()).filter(email => re.test(email) === false)

    if (invalidEmails[0] == "") { invalidEmails.length = 0 }

    if (invalidEmails.length >= 1) { return `These emails are invalid: ${invalidEmails}` }

    return
}