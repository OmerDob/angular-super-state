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
        } else {
            if (this._route)
                return this._route;

            return this.name;
        }
    }

    State.prototype.expectParams = function (paramCount) {
        if (paramCount) {
            this._paramCount = paramCount;
            return this;
        } else {
            return this._paramCount;
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

    function buildRoutePath() {
        var res = Array.prototype.slice.call(arguments).join('/');

        if (res.charAt(0) != '/')
            res = '/' + res;

        return res;
    }

    function goTo(state) {
        if (_currentState != state) {
            var stateObj = getState(state);

            if (!stateObj) {
                throw 'State: "' + state + '" undefined.';
            } else {
                if (stateObj.expectParams() && stateObj.expectParams() != arguments.length - 1)
                    throw 'State: "' + state + '" expects ' + stateObj.expectParams() + ' parameters.';

                _currentState = state;
                var params = Array.prototype.slice.call(arguments);
                params.shift();
                params.unshift(stateObj.route());
                $location.path(buildRoutePath.apply(null, params));
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