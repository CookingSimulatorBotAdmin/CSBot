const Package = require('../package.json')                              // Includes package.json
const Discord = require('discord.js')                                   // Imports discord.js

module.exports = {
    name: 'v',
    description: 'Version',
    execute(message, args, client) {
        message.reply(`hey there. The current version of this bot is v${Package.version}!`)
    }
}