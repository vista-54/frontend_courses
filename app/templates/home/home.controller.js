;(function () {
    'use strict';

    angular.module('app')

        .controller('HomeController', HomeController);


    HomeController.$inject = [];

    function HomeController() {
        const vm = this;
        vm.test = " this is a test value";
        vm.testfnc = testfnc;

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

        function testfnc() {
            return "Hello world";
        }

        console.log('HomeController is ready');
    }
})();