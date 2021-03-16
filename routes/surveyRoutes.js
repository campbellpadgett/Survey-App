const requireLogin = require('../middleware/requireLogin')
const requireCredits = require('../middleware/requireCredits')

module.exports = app => {

    app.get('/api/surveys', requireLogin, requireCredits, (req, res) => {
        res.send('list and creation of surveys')
    })

    app.post('/api/surveys/webhooks', requireLogin, (req, res) => {
        // record feedback from user
    })

    app.post('/api/surveys', requireLogin, (req, res) => {
        // create a new survey
    })

}