function getPositionResult(position) {
    console.log(position.coords.latitude + '' + position.coords.longitude);
}

navigator.geolocation.getCurrentPosition(getPositionResult);

function refreshPosition(position) {
    var list = document.getElementById('positionList');
    list.innerHTML += ('<li>' + position.coords.latitude + ' ' + 
    position.coords.longitude + '</li>');
}

navigator.geolocation.watchPosition(refreshPosition);

//To stop watching
//navigator.geolocation.clearWatch(1);
//in the window