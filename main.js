require.config({
    paths: {
    		jquery:'https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min',
        bootstrap:'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min',

        angular: 'libs/angular.min',
        angularUIRouter: 'libs/angular-ui-router.min',
        angularAnimate:'https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.2.13/angular-animate'

    },
    shim: {
    	
        "bootstrap": {
            exports: "bootstrap"
        },
        "angular": {
            exports: "angular"
        },
         "angularUIRouter": {
             deps: ["angular"]
        },
         "angularAnimate": {
            deps: ["angular"]
        },
        "jquery": {
           deps: ["angular"]
        },
         


    }
})


require(['app/eLearningModule','app/directivesModule','app/servicesModule','bootstrap','angular','angularUIRouter','angularAnimate','jquery'],
    function() {
        'use strict';

        angular.bootstrap(document, ['eLearningApp']);
    }
);