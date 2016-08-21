'use strict';

angular.module('superStateDemo').config(function ($routeProvider) {
    $routeProvider.when('/', {
        template: '<welcome></welcome>'
    })
    .when('/faq', {
        template: '<faq></faq>'
    })
    .when('/thing', {
        template: '<thing></thing>'
    })
    .when('/thing/:id', {
        template: '<thing></thing>'
    })
    .when('/show-things', {
        template: '<show-things></show-things>'
    });
});