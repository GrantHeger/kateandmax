(function () {
    'use strict';

    var app = angular.module('app');

    // Collect the routes
    app.constant('routes', getRoutes());
    
    // Configure the routes and route resolvers
    app.config(['$routeProvider', 'routes', routeConfigurator]);
    function routeConfigurator($routeProvider, routes) {

        routes.forEach(function (r) {
            $routeProvider.when(r.url, r.config);
        });
        $routeProvider.otherwise({ redirectTo: '/' });
    }

    // Define the routes 
    function getRoutes() {
        return [
            {
                url: '/',
                config: {
                    templateUrl: 'app/dashboard/dashboard.html',
                    title: 'dashboard',
                    settings: {
                        nav: 1,
                        content: '<i class="icon-dashboard"></i> Dashboard'
                    }
                }
            }, {
                url: '/story',
                config: {
                    title: 'story',
                    templateUrl: 'app/story/story.html',
                    settings: {
                        nav: 2,
                        content: '<i class="icon-lock"></i> Our Story'
                    }
                }
            }, {
                url: '/attractions',
                config: {
                    title: 'attractions',
                    templateUrl: 'app/attractions/attractions.html',
                    settings: {
                        nav: 2,
                        content: '<i class="icon-lock"></i> Attractions in Indianapolis'
                    }
                }
            }, {
                url: '/registry',
                config: {
                    title: 'registry',
                    templateUrl: 'app/registry/registry.html',
                    settings: {
                        nav: 2,
                        content: '<i class="icon-lock"></i> Our Registry'
                    }
                }
            }, {
                url: '/contact',
                config: {
                    title: 'contact',
                    templateUrl: 'app/contact/contact.html',
                    settings: {
                        nav: 2,
                        content: '<i class="icon-lock"></i> Contact Us'
                    }
                }
            }
        ];
    }
})();