











module.exports = survey => {
    return `
    <html>
        <body>
            <div>
                <h3>I'd Like your input </h3>
                <p>Please answer the following survey</p>
                <p>${survey.body}</p>
                <div>
                    <a href='/'>yes</a>
                </div>
                <div>
                    <a href='/'>no</a>
                </div>
            </div>
        </body>
    </html>
    `
}