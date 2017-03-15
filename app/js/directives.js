window.APP.directive("mExpand", function () {
    return  {
        restrict: 'EA',
        replace: true,
        transclude: {
            list: "mList"
        },
        template: "<div><ul ng-transclude='list' ng-class='{expanded: isExpanded}'></ul><button ng-click='toggleExpand()'>收缩/展开</button></div>" ,
        controller: function ($scope, $element, $attrs, $transclude) {
            $scope.isExpanded = false;
            $scope.toggleExpand = function () {
                $scope.isExpanded = !$scope.isExpanded;
            };
        }
    };
});