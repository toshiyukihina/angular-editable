'use strict';

/**
 * @ngdoc function
 * @name angularEditableApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularEditableApp
 */
angular.module('angularEditableApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
