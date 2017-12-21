'use strict'

require('dotenv').config()

// load configuration
let config_express = require('./express')

module.exports = Object.assign({}, config_express)