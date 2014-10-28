<!doctype html>
<html lang="en" ng-app>
  <head>
      <meta charset="UTF-8" />
      <title>Empty</title>
  </head>
  <body ng-controller="MainCtrl">
      <header>
        <h1>@{{ 'There\'s nothing here' }}</h1>
      </header>

    {{ HTML::script('/assets/bower_components/requirejs/require.js',
        ['data-main' => '/assets/js/main']) }}
  </body>
</html>
