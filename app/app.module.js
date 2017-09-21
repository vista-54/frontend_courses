;(function () {
    'use strict';

    angular.module('app', [
        'app.config'
    ])


        .run(run);


    function run() {
        console.log('app is ready');
    }


    // .config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    //     $locationProvider.hashPrefix('!');
    //
    //     // $routeProvider.otherwise({redirectTo: '/view1'});
    // }]);
})();



