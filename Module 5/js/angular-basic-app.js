var app = angular.module('basicApp', []);

app.controller('homeController', function($scope) {
    $scope.name = "demouser";
    $scope.testMe = function () {
        $scope.uname += "1324";
    }
})