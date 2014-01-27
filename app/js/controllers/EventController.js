'use strict';

eventsApp.controller('EventController',
    function EventController($scope, eventData) {
        $scope.sortOrder = 'name';
        var eventPromise = eventData.getEvent();

        eventPromise.then(
            function(event) {
                $scope.event = event;
                console.log(event);
            },
            function(response) { console.log(response); }
        );
        
        $scope.upVoteSession = function(session) {
            session.upVoteCount++;
        };

        $scope.downVoteSession = function(session) {
            session.upVoteCount--;
        };
    });