require.config({
    paths: {
        'angular': '../Scripts/lib/angular/angular.min',
        'angular-route': '../Scripts/lib/angular-route/angular-route.min',
        'angularAMD': '../Scripts/lib/angularAMD/angularAMD.min'
    },
    shim: {
        'angularAMD': ['angular'],
        'angular-route': ['angular']
    },
	deps: ['app']
	
});

//require(['app']);