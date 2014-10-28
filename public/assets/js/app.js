define(
  [
    'angular',
    'controllers/main',
    'routing'
  ],

  function (angular) {
    'use strict';

    return angular.module('commentsApp', [
      'commentsApp.controllers',
      'commentsApp.routing'
    ]);
  }
);
