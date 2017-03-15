window.APP = angular.module("APP", []);

window.APP.controller("mainCtrl", ["$scope", function ($scope) {
    $scope.items = [
        { title: "item1" },
        { title: "item2" },
        { title: "item3" },
        { title: "item4" },
        { title: "item5" },
        { title: "item6" },
    ];
}]);