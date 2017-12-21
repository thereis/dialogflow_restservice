'use strict'

import {Dialogflow} from '../../Utils/Dialogflow/Dialogflow'

const _    = require('lodash')
const path = require('path')
const fs   = require('fs')

export class Actions {

    // Create and list all possible actions
    static actionsList() {
        // Actions
        return {
            'facebookCardResponse':
                () => {
                    // Facebook card format
                    let response = [{
                        image_url     : 'http://via.placeholder.com/350x150',
                        title         : 'Custom title here!',
                        subtitle      : 'Custom tag here!'.replace(/<(?:.|\n)*?>/gm, ''), // Regex to remove html tags
                        default_action: {
                            'type'                : 'web_url',
                            'url'                 : 'http://google.com',
                            'webview_height_ratio': 'COMPACT'
                        },
                        buttons       : [
                            {
                                'title': 'Continue reading...',
                                'type' : 'web_url',
                                'url'  : 'http://google.com'
                            }
                        ]
                    }]

                    return Dialogflow.sendResponse({
                        fulfillmentMessages: [Dialogflow.facebookCardFormat(response)]
                    })
                },
            'default'       :
                () => {
                    return Dialogflow.sendResponse(`Welcome to the default action webhook!`)
                }
        }
    }

    // Retrieve a response from action
    static getAction = (action, parameters) => {
        // Load actions
        const actions = Actions.actionsList()

        // If the action doesn't exists, send them the custom action
        if (!actions[action]) action = 'default'
        return actions[action](parameters)
    }
}