'use strict'

require('dotenv').config()

const config = {
    server: {
        port: process.env.EXPRESS_PORT
    }
}

module.exports = config