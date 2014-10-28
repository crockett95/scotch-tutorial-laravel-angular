define(
  [
    'angular',
    'ng-ui-router'
  ],

  function (angular) {
    'use strict';

    return angular.module('commentsApp.routing', ['ui.router'])
      .config(
        ['$stateProvider',
        function ($stateProvider) {

          $stateProvider
            .state('index', {
              url: '/',
              controller: 'commentCtrl'
            });

        }]);
  });
