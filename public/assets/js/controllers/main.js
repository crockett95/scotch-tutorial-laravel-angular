define(
  [
    'angular',
    'controllers/comments'
  ],
  function (angular) {
    'use strict';

    return angular.module('commentsApp.controllers',
      [
        'commentsApp.commentsCtrl'
      ])
      .controller('MainCtrl', ['$scope', function ($scope) {

      }]);
  });
