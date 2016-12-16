/**
 * Created by dong on 2016/12/16.
 */
var app = angular.module('Book', []);
app.controller("MainCtrl", ['$scope', function ($scope) {
    $scope.showMenu = showMenu;
    $scope.hideMenu = hideMenu;
}]);
/*显示侧边栏*/
function showMenu() {
    $("#leftMenu").addClass("show");
}
/*隐藏侧边栏*/
function hideMenu() {
    $("#leftMenu").removeClass("show");
}

$(window).resize(function (e) {
    hideMenu();
});