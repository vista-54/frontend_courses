;(function () {
    'use strict';

    angular.module('app', [
        'app.config'
    ])


        .run(run);


    function run() {
        console.log('app is ready');
    }

})();



