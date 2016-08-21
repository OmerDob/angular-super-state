'use strict';

angular.module('superStateDemo').controller('menu', function (SuperStateService) {
    this.showWelcome = function () {
        SuperStateService.goTo('welcome');
    };

    this.showFaq = function () {
        SuperStateService.goTo('faq');
    };

    this.createThing = function () {
        SuperStateService.goTo('createThing');
    }

    this.showThings = function () {
        SuperStateService.goTo('showThings');
    }
});