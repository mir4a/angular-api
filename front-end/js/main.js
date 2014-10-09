require.config({
  baseUrl: '/',

  paths: {

    jquery: '/vendor/jquery/dist/jquery.min',
//    angular: '/vendor/angular/angular',
    angular_routes: '/vendor/angular-route/angular-route'

  }


});

require(['/vendor/angular/angular'], function() {
  require(['app']);
});
