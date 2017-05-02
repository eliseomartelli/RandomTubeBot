'use strict';

const Telegram = require('telegram-node-bot');

const DEFAULT_MSG = "This is what this bot can do:\n\n" +
            "/start - Used to start the bot.\n" +
            "/help - Shows the help menu.\n"  +
            "/random - Gets the url of a random video on Youtube.\n\n" +
            "Made with love by @eliseomartelli\n" +
            "eliseomartelli.it";

class RandomTubeController extends Telegram.TelegramBaseController {
    randomHandler($) {

        var youtube = require('youtube-random-video');
        var keys = require('../keys');

        youtube.getRandomVid(keys.youtubeKey, function(err , data){
            $.sendMessage("This is your random video!\nyoutu.be/" + data['id']['videoId']);
        });
    }

    startHandler($) {
        $.sendMessage(DEFAULT_MSG);
    }

    helpHandler($) {
        $.sendMessage(
            "*HELP CENTER*\n\n"+ DEFAULT_MSG,
            { parse_mode: 'Markdown' })
    }

    get routes() {
        return {
            'randomCommand' : 'randomHandler',
            'startCommand' : 'startHandler',
            'helpCommand' : 'helpHandler'
        };
    }
}

module.exports = RandomTubeController;
