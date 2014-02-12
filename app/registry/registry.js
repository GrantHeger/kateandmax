(function () {
    'use strict';
    var controllerId = 'registry';
    angular.module('app').controller(controllerId, ['common','datacontext', registry]);

    function registry(common, datacontext) {
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
                .then(function () { log('Taking a look at the registry'); });
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