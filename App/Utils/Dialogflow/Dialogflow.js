'use strict'

const _ = require('lodash')

export class Dialogflow {

    static facebookCardFormat = (content) => {

        let results = {}

        // Check if content is object
        if (!_.isArray(content))
            throw new Error('Type not supported')

        // Identify type of result
        let results_type = (content.length > 1 && content.length <= 4) ? 'list' : 'generic'

        return {
            'payload' : {
                'facebook': {
                    'attachment': {
                        'type'   : 'template',
                        'payload': {
                            'template_type': results_type,
                            'elements'     : content
                        }
                    }
                }
            },
            'platform': 'FACEBOOK'
        }
    }

    // Function to send correctly formatted responses to Dialogflow which are then sent to the user
    static sendResponse = (responseToUser) => {
        let response = {}

        // if the response is a string send it as a response to the user
        if (typeof responseToUser === 'string') {

            let responseJson = {fulfillmentText: responseToUser} // displayed response

            console.log('Response type string to Dialogflow: ' + JSON.stringify(responseJson))
            return JSON.stringify(responseJson) // Send response to Dialogflow
        } else {

            // If the response to the user includes rich responses or contexts send them to Dialogflow
            let responseJson = {}

            // Define the text response
            responseJson.fulfillmentText = responseToUser.fulfillmentText

            // Optional: add rich messages for integrations (https://dialogflow.com/docs/rich-messages)
            if (responseToUser.fulfillmentMessages) {
                responseJson.fulfillmentMessages = responseToUser.fulfillmentMessages
            }

            // Optional: add contexts (https://dialogflow.com/docs/contexts)
            if (responseToUser.outputContexts) {
                responseJson.outputContexts = responseToUser.outputContexts
            }

            // Send the response to Dialogflow
            // console.log('Response to Dialogflow: ' + JSON.stringify(responseJson))
            return JSON.stringify(responseJson)
        }
    }
}