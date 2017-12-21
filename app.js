'use strict'

let express    = require('express'),
    bodyParser = require('body-parser'),
    config     = require('./Config'),
    app        = express(),
    port       = config.server.port || 3000,
    server     = app.listen(port, () => {
        console.log('Express server listening on port ' + port)
    })

// bodyParser middleware for json
app.use(bodyParser.json())

// Map actions route directory
let actions = require('./App/Routers/actions')

// Send to actions route
app.use('/actions/', actions)

module.exports = app