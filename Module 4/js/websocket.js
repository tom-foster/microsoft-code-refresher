var socket = new WebSocket('ws://echo.websocket.org');

socket.onopen = function () {
    console.log('Our socket has been opened!');
}

socket.onmessage = function(event) {
    window.alert(event.data);
}

function testMessage() {
    socket.send('Hello Websocket World!');
}