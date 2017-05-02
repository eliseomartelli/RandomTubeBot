'use strict';

const Telegram = require('telegram-node-bot');

class OtherwiseController extends Telegram.TelegramBaseController {
    handle($) {
        $.sendMessage('Sorry, I don\'t understand.\n\nType /help to get a list of commands.');
    }
}

module.exports = OtherwiseController;
