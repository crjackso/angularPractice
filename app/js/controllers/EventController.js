eventsApp.controller('EventController', function EventController($scope) {
    $scope.event = {
        name: 'Birthday party',
        date: '1/1/2013',
        time: '10:40',
        location: {
            address: 'Google Headquarters',
            city: 'Mountain View',
            province: 'CA'
        },
        imageUrl: '/img/angular-logo.png'
    };
});