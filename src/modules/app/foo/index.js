'use strict';

module.exports =
  angular.module('ang_gulp1.foo', [
    //load your foo submodules here, e.g.:
    //require('../test').name
  ])
    .config(function ($stateProvider) {
      $stateProvider
        .state('foo', {
        url: '',
        templateUrl: 'app/foo/layout.html',
        controller: 'fooController'
      });
      /*
        .state('test', {
          url: 'test',
          templateUrl: 'app/test/layout.html',
          controller: 'testController'
        });
        */
    })
    .controller('fooController', require('./fooController'));
    //.controller('testController', require('../test/testController'));
