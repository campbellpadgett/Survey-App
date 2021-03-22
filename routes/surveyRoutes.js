const mongoose = require('mongoose')
const requireLogin = require('../middleware/requireLogin')
const requireCredits = require('../middleware/requireCredits')


const Survey = mongoose.model('surveys')


module.exports = app => {
 
    app.get('/api/surveys', requireLogin, requireCredits, (req, res) => {




        const { title, subject, body, recipients } = req.body
        const survey = new Survey({
            title,
            subject,
            body,
            recipients: recipients.split(',').map(email => ({ email: email.trim() })),
            _user: req.user.id,
            dateSent: Date.now()
        })

        survey.save()
        




    })

    app.post('/api/surveys/webhooks', requireLogin, (req, res) => {
        // record feedback from user
    })

    app.post('/api/surveys', requireLogin, (req, res) => {
        // create a new survey
    })

}