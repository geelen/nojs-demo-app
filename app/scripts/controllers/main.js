'use strict';

angular.module('nojsDemoAppApp')
  .controller('MainCtrl', function ($scope, $timeout) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.api = "Loading...";
    $timeout(function() {
      $scope.api = "Loaded!";
      localStorage.setItem('nojsSnapshotGo', true);
    }, 1000);
  });
