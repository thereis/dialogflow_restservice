'use strict'

let _ = require('lodash')

export class StringUtils {
    static removeSpecialEntities(words) {
        const chars   = ['áàãâäéèêëíìîïóòõôöúùûüçÁÀÃÂÄÉÈÊËÍÌÎÏÓÒÕÖÔÚÙÛÜÇ', 'aaaaaeeeeiiiiooooouuuucAAAAAEEEEIIIIOOOOOUUUUC']
        let newString = ''

        _.forEach(words, (letter) => {
            return newString += (chars[0].indexOf(letter) !== -1) ? chars[1][chars[0].indexOf(letter)] : letter
        })

        return newString
    }
}