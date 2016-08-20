'use strict';

angular.module('superStateDemo').controller('menu', function (SuperStateService) {
    this.showWelcome = function () {
        SuperStateService.goTo('welcome');
    };

    this.showFaq = function () {
        SuperStateService.goTo('faq');
    };
});