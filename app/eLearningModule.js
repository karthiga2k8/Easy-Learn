define(['app/config',
        'app/detailsController',
        'app/registerController',
        'app/registerSuccessController',
        'app/directivesModule',
        'app/servicesModule'],
    function(config, detailsController, registerController, registerSuccessController){
    'use strict';

    var app = angular.module('eLearningApp',['ui.router','ngAnimate','directivesModule','servicesModule']);

    app.config(config);
    app.controller('detailsController',detailsController);
    app.controller('registerController', registerController);
    app.controller('registerSuccessController',registerSuccessController);
   
});