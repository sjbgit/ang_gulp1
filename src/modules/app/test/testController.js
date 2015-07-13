/**
 * Created by sbunke on 7/13/2015.
 */
'use strict';

module.exports = /*@ngInject*/
  function testController($scope) {
    $scope.welcome = 'TEST CONTROLLER - Congratulations!';

    alert('this is my test - TEST CONTROLLER');
  };
