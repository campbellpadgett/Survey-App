










const keys = require('../../config/keys')
module.exports = survey => {
    return `
    <html>
        <body>
            <div>
                <h3>Hello! We'd like your input!</h3>
                <p>Please select yes or no to the question</p>
                <p>${survey.body}</p>
                <div>
                    <a href='${keys.redirectDomain}/api/surveys/${survey.id}/yes'>Yes</a>
                </div>
                <div>
                    <a href='${keys.redirectDomain}/api/surveys/${survey.id}/no'>No</a>
                </div>
            </div>
        </body>
    </html>
    `
}