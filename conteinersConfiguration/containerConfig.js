let container = require('kontainer-di')
let versionProvider = require('../services/VersionProvider')
let lockingManager = require('../services/LockingManager')
let redis = require('redis')

container.register('versionProvider', [], versionProvider)
container.register('redis', [], redis)
container.register('lockingManager', ['redis'], lockingManager)

module.exports = container