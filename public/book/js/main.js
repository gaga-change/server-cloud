/**
 * Created by dong on 2016/12/16.
 */
var app = angular.module('Blog', []);
app.controller("MainCtrl", ['$scope', "$http", function ($scope, $http) {
    $scope.showMenu = showMenu;
    $scope.hideMenu = hideMenu;
    $scope.showSonMenu = showSonMenu;
    $http({method: "get", url: "/data/type"}).success(function (data) {
        $scope.menuList = data["list"];
    })
}]);
/*点击显示子菜单*/
function showSonMenu() {
    console.log("fds");
    var sm = $("#sonMenu");
    var c = $("#caret");

    if (sm.hasClass("show")) {
        sm.removeClass("show");
    } else {
        sm.addClass("show");
    }
    if (c.hasClass("up")) {
        c.removeClass("up");
    } else {
        c.addClass("up");
    }
}

/*显示侧边栏*/
function showMenu() {
    $("#leftMenu").addClass("show");
}
/*隐藏侧边栏*/
function hideMenu() {
    $("#leftMenu").removeClass("show");
}

$(window).resize(function () {
    hideMenu();
});