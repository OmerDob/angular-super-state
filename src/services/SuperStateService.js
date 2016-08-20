angular.module('superState').factory('SuperStateService', function () {

    // Data members
    var _states = [];
    var _currentState;

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
        addState: addState,
        currentState: _currentState
    };

});