/**
 * Created by dong on 2016/12/16.
 */
var app = angular.module('Blog', ["ngAnimate", "ui.router"]);
app.config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {
    /*首页*/
    $stateProvider.state({
        name: "index",
        url: "/index",
        views: {
            content: {
                templateUrl: "blog/component/first.html"
            }
        }
    });
    /*所有文档*/
    $stateProvider.state({
        name: "all",
        url: "/all",
        views: {
            content: {
                templateUrl: "blog/component/list.html"
            }
        }
    });
    /*各种文档*/
    $.get("/data/type", function (data) {
       var data = data["list"];
       data.forEach(function (v, e) {
           $stateProvider.state({
               name: v.name,
               url: "/" + v.name,
               views: {
                   content: {
                       templateUrl: "blog/component/list.html",
                       controller: "ListCtrl"
                   }
               },
               params: {name: v.name}
           });
       })
    });
    $urlRouterProvider.otherwise("index");
}]);
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
        if ($scope.ifShowSonMenu) {
            $scope.ifShowSonMenu = false;
        } else {
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

app.controller("ListCtrl", ['$scope', '$http', "$stateParams", function ($scope, $http, $stateParams) {
    console.log($stateParams);
    $scope.name = $stateParams.name;
}]);

/*给“文档分类给具体的值”*/
setMyClassHeight();
function setMyClassHeight() {
    var m = $("#myClass");
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