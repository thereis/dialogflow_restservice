'use strict'

import {Actions} from '../Controllers/Dialogflow'

let express = require('express')
let router  = express.Router()

// If a new post has been received
router.post('/', async (req, res) => {

    // Check if there is a query
    if (req.body.queryResult) {

        // Variables
        let action     = (req.body.queryResult.action) ? req.body.queryResult.action : 'default'
        let parameters = (req.body.queryResult.parameters) || {}

        let results = await Actions.getAction(action, parameters)
        // console.log(results, 'RESULTADOS')

        // Render the JSON
        res.send(results)
    }
    else res.send({'error': true})
})

module.exports = router