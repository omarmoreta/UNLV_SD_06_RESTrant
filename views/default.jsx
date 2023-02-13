const React = require("react")

const Default = (html) => {
    return (
        <html>
            <head>
                <title>RESTrant</title>
            </head>
            <body>
                { html.children }
            </body>
        </html>
    )
}

module.exports = Default