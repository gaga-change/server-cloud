/**
 * Created by dong on 2016/12/16.
 */
var app = angular.module('Blog', ["ngAnimate"]);
app.controller("MainCtrl", ['$scope', "$http", function ($scope, $http) {
    $scope.ifShowSonMenu = false;
    $scope.showMenu = showMenu;
    $scope.hideMenu = hideMenu;
    $scope.showSonMenu = showSonMenu;
    $http({method: "get", url: "/data/type"}).success(function (data) {
        $scope.menuList = data["list"];
    });

    /*点击显示子菜单*/
    function showSonMenu() {
        console.log("fds");
        if( $scope.ifShowSonMenu) {
            $scope.ifShowSonMenu = false;
        }else {
            $scope.ifShowSonMenu = true;
        }
        var c = $("#caret");
        if (c.hasClass("up")) {
            c.removeClass("up");
        } else {
            c.addClass("up");
        }
    }
}]);
/*给“文档分类给具体的值”*/
setMyClassHeight();
function setMyClassHeight() {
    var m = $("#myClass");
    console.log(m.height());
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