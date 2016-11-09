/**
 * Created by jundong on 16/11/7.
 */
var abilityList = [];
var app = angular.module('myApp', ['ngAnimate'])
    .controller('AbilityCtrl', ['$scope', '$timeout', function ($scope, $timeout) {
        $scope.abilityList = [];
        $timeout(function () {
            $scope.$apply(function () {
                $scope.abilityList = getAbilityList();
            })
        }, 1);
    }]);

function getAbilityList() {
    if (abilityList.length > 0)return abilityList;
    abilityList = [
        {name: 'HTML', percentage: '100%'},
        {name: 'CSS', percentage: '100%'},
        {name: 'JavaScript', percentage: '100%'},
        {name: 'jQuery', percentage: '90%'},
        {name: 'Less', percentage: '75%'},
        {name: 'AngularJS', percentage: '88%'},
        {name: 'Bootstrap', percentage: '80%'},
        {name: 'NodeJS', percentage: '70%'},
        {name: 'MongoDB', percentage: '63%'}
    ];
    return abilityList;
}