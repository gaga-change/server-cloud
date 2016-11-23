/**
 * Created by jundong on 16/11/7.
 */
var abilityList = [];
var app = angular.module('myApp', ['ngAnimate'])
    .controller('AbilityCtrl', ['$scope', '$timeout', function ($scope, $timeout) {
        $scope.abilityList = [];
        $timeout(function () {
            $scope.$apply(function () {
                var data = getAbilityList();
                data = data.map(function(e, i){
                    e['percentage'] = {
                        width: e['percentage']
                    };
                    return e;
                });
                $scope.abilityList = data;
            })
        }, 1);
    }]);

function getAbilityList() {
    if (abilityList.length > 0)return abilityList;
    abilityList = [
        {name: 'HTML', percentage: '86%'},
        {name: 'CSS', percentage: '73%'},
        {name: 'JavaScript', percentage: '66%'},
        {name: 'jQuery', percentage: '70%'},
        {name: 'MySQL', percentage: '25%'},
        {name: 'Less', percentage: '75%'},
        {name: 'AngularJS', percentage: '66%'},
        {name: 'Bootstrap', percentage: '60%'},
        {name: 'java', percentage: '30%'},
        {name: 'NodeJS', percentage: '40%'}
    ];
    return abilityList;
}