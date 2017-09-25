;(function () {
    'use strict';

    angular.module('app')

        .controller('HomeController', HomeController);


    HomeController.$inject = ['user', 'userStorage'];

    function HomeController(user, userStorage) {
        const vm = this;
        vm.test = " this is a test value";
        vm.testfnc = testfnc;
        vm.name = user.getName();

        vm.clients = [
            {
                username: "Ivan",
                age: "22",
                email: "ivan@gmail.com"
            },
            {
                username: "Vitalii",
                age: "23",
                email: "vitalii@gmail.com"
            },
            {
                username: "Darina",
                age: "21",
                email: "darina@gmail.com"
            }
        ];
        userStorage.users = vm.clients;


        function testfnc() {
            return "Hello world";
        }

        console.log('HomeController is ready');
    }


})();