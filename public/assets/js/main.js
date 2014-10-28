'use strict';

require.config({
  paths: {
    'restangular':  '../bower_components/restangular/dist/restangular',
    'angular':      '../bower_components/angular/angular',
    'jquery':       '../bower_components/jquery/dist/jquery',
    'ng-ui-router': '../bower_components/angular-ui-router/release/angular-ui-router',
    'bootstrap':    '../bower_components/bootstrap-sass-official/javascripts/bootstrap',
    'jasny':        '../bower_components/jasny-bootstrap/dist/js/jasny-bootstrap',
    'lodash':       '../bower_components/lodash/dist/lodash',
  },
  shim: {
    'angular': {
      'deps': ['jquery'],
      'exports': 'angular'
    },
    'restangular': {
      'deps': ['angular', 'lodash']
    },
    'ng-ui-router': {
      'deps': ['angular']
    },
    'bootstrap': {
      'deps': ['jquery']
    },
    'jasny': {
      'deps': ['jquery']
    }
  }
});

window.name = "NG_DEFER_BOOTSTRAP!";

require([
  'angular',
  'app'
], function (angular, app) {
  angular.resumeBootstrap([app.name]);
});
