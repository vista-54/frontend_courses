;(function () {
    'use strict';
    angular.module('app')
        .factory('userStorage', userStorage);

    userStorage.$inject = [];

    function userStorage() {
        var model = {};
        model.users = {};
        return model;

    }
})();