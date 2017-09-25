;(function () {
    'use strict';

    angular.module('app')
        .controller('ClientController', ClientController);
    ClientController.$inject = [];

    function ClientController() {
        const vm = this;
        console.log('client controller init')
    }
})();