'use strict';

angular.module('superStateDemo', ['ngRoute', 'superState']).run(function (SuperStateService) {
    SuperStateService.addState('index');
    SuperStateService.addState('faq');
});