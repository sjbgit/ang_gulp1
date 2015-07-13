'use strict';

module.exports =
  angular.module('ang_gulp1.common', [
    require('./directives').name,
    require('./filters').name,
    require('./services').name
  ]);
