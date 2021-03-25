const mongoose = require('mongoose')
const requireLogin = require('../middleware/requireLogin')
const requireCredits = require('../middleware/requireCredits')
const Mailer = require('../services/Mailer')
const surveyTemplate = require('../services/emailTemplates/surveyTemplate')


const Survey = mongoose.model('surveys')


module.exports = app => {
 
    app.post('/api/surveys', requireLogin, requireCredits, async (req, res) => {

        const { title, subject, body, recipients } = req.body

        const survey = new Survey({
            title,
            subject,
            body,
            recipients: recipients.split(',').map(email => ({ email: email.trim() })),
            _user: req.user.id,
            dateSent: Date.now()
        })

        try { 
            const mailer = new Mailer(survey, surveyTemplate(survey))
            await mailer.send()  
            await survey.send()
            req.user.credits -= 1
            const user = await req.user.save()

            res.send(user)
        } catch(err) { res.status(422).send(err) }
    })

    app.post('/api/surveys/webhooks', requireLogin, (req, res) => {
        // record feedback from user
    })

    app.get('/api/surveys/thanks', (req, res) => {
        res.send('thanks for voting')
    })

}