(function () {
    'use strict';
    var controllerId = 'story';
    angular.module('app').controller(controllerId, ['common', story]);

    function story(common) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);

        var vm = this;
        vm.title = 'Our Story';

        activate();

        function activate() {
            common.activateController([], controllerId)
                .then(function () { log('Now reading our story'); });
        }
    }
})();