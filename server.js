var WebSocket = require('ws')
var ws = new WebSocket('ws://echo.websocket.org')

ws.on('open', function open () {
  ping()
})

ws.on('message', function (data, flags) {
  console.log(data)
  ping()
})

function ping () {
  setTimeout(function () {
    ws.send('ping')
  }, Math.floor(Math.random() * 5000) + 1000)
}


var Botkit = require('botkit');

var controller = Botkit.slackbot({
  debug: false
});

// connect the bot to a stream of messages
controller.spawn({
  token: ""
})
