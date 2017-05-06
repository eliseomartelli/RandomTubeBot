# RandomTubeBot
Get a random Youtube video from a Telegram Bot.
___

## Setup

##### First things first
To use this project you've to provide your Telegram Bot API key and your YouTube Data API key.

You can get your keys by following these guides:
1. [YouTube](https://developers.google.com/youtube/v3/getting-started)
2. [Telegram](https://core.telegram.org/bots#6-botfather)

##### Second things second
Hey, you're kinda ready!

Clone this repo and create a file named ```keys.js``` inside the repo's root, then open it in your text editor, and put this in your file:
```js
module.exports = {
    telegramKey : "<YOUR TELEGRAM API KEY HERE>",
    youtubeKey : "<YOUR YOUTUBE API KEY HERE>"
};

```
Remember to change the strings with your own keys 😎.

##### Last things last
Now you're ready to run the bot!

1. Install the dependencies:
```
npm install
```

2. Run it!
```
npm start
```

Now you can test it locally or host it on a server.
You can see a list of servers or other solutions to host it and get it to your users [here](https://github.com/python-telegram-bot/python-telegram-bot/wiki/Where-to-host-Telegram-Bots).

If you like the idea and you want to get in touch with me send me an email here: 
```
me@eliseomartelli.it
```
or visit my [personal site](http://eliseomartelli.it). You can find my public profiles here.
___

## License

```
Copyright (c) 2017 Eliseo Martelli

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
