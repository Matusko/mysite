/**
 * Created by qw on 4.5.2015.
 */
var mysiteControllers = angular.module('mysiteControllers', []);


mysiteControllers.controller('UvodCtrl', ['$scope','$famous',
  function($scope,$famous) {
    $scope.sequentialOptions = {
        direction: 0 // vertical = 1 (default), horizontal = 0
    };
    $scope.containerSequentialOptions = {
        direction: 1 // vertical = 1 (default), horizontal = 0
    };
    $scope.sequence = [];
    $scope.getColor= function(noOfColors) {
    frequency = 5 / noOfColors;
    for (var i = 0; i < noOfColors;++i) {
        r = Math.floor(Math.sin(frequency * i + 0) * (127) + 128);
        g = Math.floor(Math.sin(frequency * i + 1) * (127) + 128);
        b = Math.floor(Math.sin(frequency * i + 3) * (127) + 128);
        color = {bgColor: 'rgb('+r+','+g+','+b+')'};
        $scope.sequence.push(color);
        }
    }
    $scope.myGridLayoutOptions = {
       dimensions: [3,1] // specifies number of columns and rows
    };

    $scope.grids = [{bgColor: "orange"}, {bgColor: "red"}, {bgColor: "green"}, {bgColor: "yellow"}];
    $scope.changeColor= function(view,event) {
        alert(view.bgColor);

    }
      $scope.getColor(300);

  }]);