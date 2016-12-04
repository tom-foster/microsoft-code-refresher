function greet() {
    alert('Hello everyone');
}

greet();

var anonymousFunctionInAVariable = function() {
    alert('I am anonymous');
}

anonymousFunctionInAVariable();

function normalFunction(input, callBackFunction) {
    var newValue = input + 1;
    callBackFunction(newValue);
};

normalFunction(1, function(inputViaCallback) {
    alert(inputViaCallback);
});

