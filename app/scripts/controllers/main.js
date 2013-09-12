'use strict';

angular.module('nojsDemoAppApp')
  .controller('MainCtrl', function ($scope, $timeout) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $timeout(function() {
      localStorage.setItem('scrape-away', true);
      $scope.awesomeThings.push("NOJS!!");
    }, 0)
  });
