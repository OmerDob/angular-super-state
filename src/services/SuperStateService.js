angular.module('superState').factory('SuperStateService', ['$location', function ($location) {

    // Data members
    var _states = {};
    var _currentState;

    // Objects
    function State(name) {
        this.name = name;
    }

    State.prototype.route = function (route) {
        if (route) {
            this._route = route;
            return this;
        }
        else {
            if (this._route)
                return this._route;

            return this.name;
        }
    }

    // Functions
    function addState(name) {
        var addedState = new State(name);

        _states[name] = addedState;

        return addedState;
    }

    function getState(state) {
        for (var i in _states)
            if (_states.hasOwnProperty(i) && _states[i].name == state)
                return _states[i];
        
        return null;
    }

    function goTo(state) {
        if (_currentState != state) {
            var stateObj = getState(state);

            if (!stateObj) {
                console.error('State: \'' + state + '\' undefined.');
            }
            else {
                _currentState = state;
                $location.path('/' + stateObj.route().replace(/^\//, ''));
            }
        }
    }

    // Service API
    return {
        addState: addState,
        currentState: getState(_currentState),
        goTo: goTo
    };

}]);