'use strict';

angular.module('superStateDemo').component('thing', {
    templateUrl: '/scripts/components/thing/thing.html',
    controllerAs: 'ctrl',
    controller: function ($routeParams, ThingService) {

        this.init = function () {
            if ($routeParams.id)
                this.thing = ThingService.getById($routeParams.id);
        };

        this.save = function () {
            if (this.thing.id)
                ThingService.updateThing(this.thing);
            else
                ThingService.addThing(this.thing);
        };

        this.init();

    }
});