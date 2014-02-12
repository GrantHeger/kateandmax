(function () {
    'use strict';

    var serviceId = 'datacontext';
    angular.module('app').factory(serviceId,
        ['common', datacontext]);

    function datacontext(common) {
        var $q = common.$q;

        var service = {
            getPeople: getPeople,
            getMessageCount: getMessageCount,
            getRestaurants: getRestaurants,
            getPlaces: getPlaces
        };

        return service;

        function getMessageCount() { return $q.when(72); }

        function getPeople() {
            var people = [
                { firstName: 'John', lastName: 'Papa', age: 25, location: 'Florida' },
                { firstName: 'Ward', lastName: 'Bell', age: 31, location: 'California' },
                { firstName: 'Colleen', lastName: 'Jones', age: 21, location: 'New York' },
                { firstName: 'Madelyn', lastName: 'Green', age: 18, location: 'North Dakota' },
                { firstName: 'Ella', lastName: 'Jobs', age: 18, location: 'South Dakota' },
                { firstName: 'Landon', lastName: 'Gates', age: 11, location: 'South Carolina' },
                { firstName: 'Haley', lastName: 'Guthrie', age: 35, location: 'Wyoming' }
            ];
            return $q.when(people);
        }
        function getRestaurants() {
            var restaurants = [
                { restaurant: "Barcelona Tapas", address: '201 N Delaware St, Indianapolis, IN 46204', website: 'http://www.barcelonatapas.com/' },
                { restaurant: "Maxine's Chicken and Waffles", address: '132 N East St', website: 'http://www.maxineschicken.com/main.htm' },
                { restaurant: "Bakersfield Mass Ave.", address: '334 Massachusetts Ave.', website: 'http://www.bakersfieldmassave.com/' },
                { restaurant: "Bru Burger", address: '410 Massachusetts Ave', website: 'http://www.bruburgerbar.com/' },
                { restaurant: "Calvin Fletcher's Coffee Company", address: '647 Virginia Ave', website: 'http://www.cfcoffeecompany.com/' }
            ];
            return $q.when(restaurants);
        }
        function getPlaces() {
            var places = [
                { place: "Indianapolis Motor Speedway", address: '4790 W 16th St', website: 'http://www.indianapolismotorspeedway.com/facility/35204-Museum/' },
                { place: "Indianapolis Zoo", address: '1200 W Washington St', website: 'http://www.indyzoo.com/' },
                { place: "Indianapolis Firefighters Museum", address: '748 Massachusetts Ave', website: 'http://www.l416.com/index.cfm?section=16&pagenum=130' },
                { place: "Indiana State Museum", address: '650 W Washington St', website: 'http://www.indianamuseum.org/' },
                { place: "NCAA Hall of Champions", address: '700 W Washington St', website: 'http://www.ncaahallofchampions.org/' },
                { place: "Sun King Brewery", address: '135 N College Ave', website: 'http://www.sunkingbrewing.com/' },
                { place: "Flat 12 Bierwerks", address: '414 Dorman St', website: 'http://www.flat12.me/' },
                { place: "Easley Winery", address: '205 N College Ave', website: 'http://www.easleywinery.com/' },
                { place: "Atomic Bowl Duckpin", address: '1105 Prospect St', website: 'http://www.fountainsquareindy.com/bowling/' },
                { place: "Fountain Square Brewery", address: '1301 Barth Ave', website: 'http://fountainsquarebrewery.com/' }
            ];
            return $q.when(places);
        }
    }
})();