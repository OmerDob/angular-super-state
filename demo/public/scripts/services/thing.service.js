'use strict';

angular.module('superStateDemo').factory('ThingService', function () {
    const _things = [
        {
            id: 1,
            name: 'first thing',
            description: 'just a thing to show...'
        },
        {
            id: 2,
            name: 'second thing',
            description: 'just another thing to show...'
        },
        {
            id: 3,
            name: 'third thing',
            description: 'one more thing to show...'
        }
    ];

    var _nextId = 4;

    function getAll() {
        return (_things);
    }

    function getById(id) {
        for (var i in _things)
            if (_things[i].id == id)
                return (_things[i]);
        
        return null;
    }

    function addThing(thing) {
        thing.id = _nextId;
        _things.push(thing);
    }

    function updateThing(thing) {
        var thingToUpdate = getById(thing.id); 
        if (!thingToUpdate)
            throw 'Id doesn\'t exist [Thing]';
        
        thingToUpdate.name = thing.name;
        thingToUpdate.description = thing.description;
    }

    return {
        getAll: getAll,
        getById: getById,
        addThing: addThing,
        updateThing: updateThing
    };
});