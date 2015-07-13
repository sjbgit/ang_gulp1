/**
 * Created by sbunke on 7/13/2015.
 */
'use strict';

module.exports =
  angular.module('ang_gulp1.test', [
    //load your foo submodules here, e.g.:
    //require('./bar').name
  ])
    .config(function ($stateProvider) {
      $stateProvider
        .state('test', {
          url: '/test',
          templateUrl: 'app/test/layout.html',
          controller: 'testController'
        });
    })
    .controller('testController', require('./testController'));


