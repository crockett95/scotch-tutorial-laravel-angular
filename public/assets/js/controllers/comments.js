define(
  [
    'angular',
    'services/comments'
  ],
  function (angular) {
    'use strict';

    return angular.module('commentsApp.commentsCtrl',
      ['commentsApp.comments'])
      .controller('CommentsCtrl'
        ['$scope', 'comments',
        function ($scope, comments) {

        }]);
  });
