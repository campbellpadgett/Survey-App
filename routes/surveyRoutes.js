const requireLogin = require('../middleware/requireLogin')

module.exports = app => {

    app.get('/api/surveys', requireLogin, (req, res) => {
        res.send('list of surveys')
    })

    app.post('/api/surveys/webhooks', requireLogin, (req, res) => {
        // record feedback from user
    })

    app.post('/api/surveys', requireLogin, (req, res) => {
        // create a new survey
    })

}