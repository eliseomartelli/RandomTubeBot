'use strict';

const Telegram = require('telegram-node-bot');
const TextCommand = Telegram.TextCommand;
var keys = require('./keys');
const tg = new Telegram.Telegram(keys.telegramKey,
    {
        workers: 1
    });

const RandomTubeController = require('./controllers/randomtube'),
      OtherwiseController = require('./controllers/otherwise');

const rtcController = new RandomTubeController();

tg.router
    .when(new TextCommand('/random', 'randomCommand'), rtcController)
    .when(new TextCommand('/start', 'startCommand'), rtcController)
    .when(new TextCommand('/help', 'helpCommand'), rtcController)
    .otherwise(new OtherwiseController());

function exitHandler(exitCode) {
    process.exit(exitCode);
}

process.on('SIGINT', exitHandler.bind(null, 0));
process.on('uncaughtException', exitHandler.bind(null, 1));
