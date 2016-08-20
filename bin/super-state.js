'use strict';

/*    src/module.js    */
angular.module('superState', []);

/*    src/services/SuperStateService.js    */
angular.module('superState').factory('SuperStateService', function () {

    // Data members
    var _states = [];

    // Objects
    function State(name) {
        this.name = name;
    }

    // Functions
    function addState(name) {
        var addedState = new State(name);

        _states.push(addedState);

        return addedState;
    }

    // Service API
    return {
        addState: addState
    };

});
