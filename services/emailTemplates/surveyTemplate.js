










const keys = require('../../config/keys')
module.exports = survey => {
    return `
    <html>
        <body>
            <div>
                <h3>I'd Like your input </h3>
                <p>Please answer the following survey</p>
                <p>${survey.body}</p>
                <div>
                    <a href='${keys.redirectDomain}/api/surveys/${survey.id}/yes'>yes</a>
                </div>
                <div>
                    <a href='${keys.redirectDomain}/api/surveys/${survey.id}/no'>no</a>
                </div>
            </div>
        </body>
    </html>
    `
}