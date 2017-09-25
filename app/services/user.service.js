;(function () {
    angular.module('app')
        .service('user', user);

    user.$inject = [];

    function user() {
        const model = {};
        model.name = "SOME USER NAME";
        model.getName = getName;

        return model;


        function getName() {
            return model.name;
        }
    }
})();