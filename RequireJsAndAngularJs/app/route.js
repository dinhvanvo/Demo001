define([], function () {
    return {
        defaultRoutePath: '/',
        routes: {
            '/': {
                templateUrl: '/app/views/index.html',
                dependencies: [
                    'app/controllers/indexController'
                ]
            }
        }
    };
});