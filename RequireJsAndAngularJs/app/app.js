define(['angularAMD', 'angular-route'], function (angularAMD) {

    var app = angular.module("webapp", ['ngRoute']);

    app.config(function ($routeProvider) {

        $routeProvider
        .when("/", angularAMD.route({
            templateUrl: 'app/views/index.html', controller: 'indexCtrl', controllerUrl: 'controllers/indexController'
        }))
        .when("/about", angularAMD.route({
            templateUrl: 'app/views/about.html', controller: 'aboutCtrl', controllerUrl: 'controllers/aboutController'
        }))
        .when("/contact", angularAMD.route({
            templateUrl: 'app/views/contact.html', controller: 'contactCtrl', controllerUrl: 'controllers/contactController'
        }))
        .otherwise({ redirectTo: "/" });

    });

    return angularAMD.bootstrap(app);
});