// you'll need to run this in edge/safari/ie11
// alternatively fire up python server in the main folder loalhost:8000.
// python3 -m http.server 

var worker;

function startWorker() {
    worker = new Worker('webworkers/worker.js');
    worker.onmessage = function(event) {
        document.getElementById('output').innerHTML += '<li>' + event.data + '</li>';
    };
}

function stopWorker() {
    worker.terminate();
}