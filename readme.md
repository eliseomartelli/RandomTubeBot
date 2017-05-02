# RandomTubeBot
Get a random Youtube video from a Telegram Bot.
___

## Setup

1. Clone this repo.
2. Get the Telegram Bot Api Key.
3. Get the Youtube Data Api Key.
4. Create a file named keys.js inside the root directory of this project.
5. Edit the file like this:
```javascript
module.exports = {
    telegramKey : "<TELEGRAM API KEY HERE>",
    youtubeKey : "<YOUTUBE API KEY HERE>"
};
```
6. Install the following dependencies:
```
npm install youtube-random-video
npm install telegram-node-bot
```
7. Run the bot
```
node index.js
```
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
