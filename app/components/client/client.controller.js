;(function () {
    'use strict';

    angular.module('app')
        .controller('ClientController', ClientController);

    ClientController.$inject = ['$scope', 'userStorage'];

    function ClientController($scope, userStorage) {
        const vm = this;
        vm.client = $scope.clientScope;
        console.log($scope);
        console.log('client controller init');

        debugger;
        console.log(userStorage);
    }
})();