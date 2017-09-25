;(function () {
    'use strict';

    angular.module('app')
        .directive('clientDirective', client);

    function client() {
        return {
            restrict: 'AE',
            scope: {
                clientScope: '<',
            },
            templateUrl: 'components/client/client.html',
            controller: 'ClientController',
            controllerAs: 'vm',
            link: function (scope, elem, attrs) {

                console.log("client has been included successfully");
            }
        };
    }
})();