var app = angular.module("app", ["ngAnimate"]);

app.directive("floatBox", [function () {
    return {
        restrict: "EA",
        replace: true,
        template: '<div class="float-box">漂浮的盒子, 点击滑出</div>',
        link: function (scope, element, attr) {
        }
    };
}]);


app.controller("mainCtrl", ["$scope", function ($scope) {
    $scope.boxes = [];
    $scope.addBox = function () {
        $scope.boxes.push({});
    };

    $scope.removeBox = function (box) {
        var index = $scope.boxes.indexOf(box);
        $scope.boxes.splice(index, 1);
    };
}]);