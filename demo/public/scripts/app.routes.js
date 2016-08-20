'use strict';

angular.module('superStateDemo').config(function ($routeProvider) {
    $routeProvider.when('/', {
        template: '<welcome></welcome>'
    })
    .when('/faq', {
        template: '<faq></faq>'
    });
});