;(function () {
    'use strict';

    angular.module('app')

        .controller('HomeController', HomeController);


    HomeController.$inject = [];

    function HomeController() {
        console.log('HomeController is ready');
    }
})();