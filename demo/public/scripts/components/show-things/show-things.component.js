'use strict';

angular.module('superStateDemo').component('showThings', {
    templateUrl: '/scripts/components/show-things/show-things.html',
    controllerAs: 'ctrl',
    controller: function (SuperStateService, ThingService) {
        this.init = function () {
            this.things = ThingService.getAll();
        };

        this.showThing = function (thing) {
            SuperStateService.goTo('editThing', thing.id);
        };

        this.init();
    }
});