;(function () {
    'use strict';

    angular.module('app.config', [
        'ui.router'
    ])

        .config(config);

    config.$inject = ['$stateProvider', '$urlRouterProvider'];

    function config($stateProvider, $urlRouterProvider) {
        console.log('config is ready');

        $urlRouterProvider.otherwise('/home');
    }

})();