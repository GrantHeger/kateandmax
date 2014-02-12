(function () {
    'use strict';
    var controllerId = 'contact';
    angular.module('app').controller(controllerId, ['common','datacontext', contact]);

    function contact(common, datacontext) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);

        var vm = this;
        vm.restaurants = [];
        vm.places = [];
        vm.title = 'Our Story';

        activate();

        function activate() {
            var promises = [getRestaurants(), getPlaces ()];
            common.activateController([], controllerId)
                .then(function () { log('Have questions? Email me!'); });
        }
        function getRestaurants() {
            return datacontext.getRestaurants().then(function (data) {
                return vm.restaurants = data;
            });
        }
        function getPlaces() {
            return datacontext.getPlaces().then(function (data) {
                return vm.places = data;
            });
        }
    }
})();