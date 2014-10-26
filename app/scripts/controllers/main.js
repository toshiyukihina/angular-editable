'use strict';

/**
 * @ngdoc function
 * @name angularEditableApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularEditableApp
 */
angular.module('angularEditableApp')
  .controller('MainCtrl', [
    '$scope',
    function($scope) {
      $scope.user = {
        id: 1,
        name: 'awesome user',
        status: 2,
        group: 4,
        groupName: 'admin'
      }; 

      $scope.statuses = [
        {value: 1, text: 'status1'},
        {value: 2, text: 'status2'},
        {value: 3, text: 'status3'},
        {value: 4, text: 'status4'}
      ]; 

      $scope.groups = [];
    }]);
