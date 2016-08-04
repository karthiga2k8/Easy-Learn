require.config({
    paths: {
    	jquery:'https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min',
        bootstrap:'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min',

        angular: 'libs/angular.min',
        angularUIRouter: 'libs/angular-ui-router.min',
        angularAnimate:'https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.2.13/angular-animate',
        angularBootstrap:'https://angular-ui.github.io/bootstrap/ui-bootstrap-tpls-2.0.1'

    },
    shim: {
    	"jquery": {
            exports: "jquery"
        },
        "bootstrap": {
            exports: "bootstrap"
        },
        "angular": {
            exports: "angular"
        },
         "angularUIRouter": {
            exports: "angularUIRouter"
        },
         "angularAnimate": {
            exports: "angularAnimate"
        },
         "angularBootstrap": {
            exports: "angularBootstrap"
        }

    }
})


require(['app/eLearningModule','app/directivesModule','app/servicesModule','jquery','bootstrap','angular','angularUIRouter','angularAnimate','angularBootstrap'],
    function() {
        'use strict';

        angular.bootstrap(document, ['eLearningApp']);
    }
);