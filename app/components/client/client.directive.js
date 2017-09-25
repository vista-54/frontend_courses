;(function () {
    'use strict';

    angular.module('app')
        .directive('client', client);

    function client() {
        return {
            restrict: 'AE',
            scope: {
                clientScope: '=',
            },
            templateUrl: 'components/client/client.html',
            controller: 'ClientController',
            controllerAs: 'vm',
            link: function (scope, elem, attrs) {
                debugger;
                console.log("client has been included successfully");
            }
        };
    }
})();