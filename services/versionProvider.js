'use strict'

module.exports = class VersionProvider {
    constructor() {
        let config = require('config')
        this._version = config.get('version')
    }

    /**
     * Return Lock service version
     */
    GetVersion() {
        return this._version
    }
}