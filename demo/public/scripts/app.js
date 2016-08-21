'use strict';

angular.module('superStateDemo', ['ngRoute', 'superState']).run(function (SuperStateService) {
    SuperStateService.addState('welcome')
        .route('/');
    SuperStateService.addState('faq');
    SuperStateService.addState('createThing')
        .route('thing');
    SuperStateService.addState('showThings')
        .route('show-things');
});