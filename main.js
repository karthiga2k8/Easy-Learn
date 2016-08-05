require.config({
    paths: {
    		jquery:'libs/jquery.min',
        bootstrap:'libs/bootstrap.min',

        angular: 'libs/angular.min',
        angularUIRouter: 'libs/angular-ui-router.min',
        angularAnimate:'libs/angular-animate'

    },
    shim: {
    	"jquery": {
            exports: "jquery"
        },
        "bootstrap": {
             deps: ['jquery'] ,
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
        }

    }
})


require(['app/eLearningModule','app/directivesModule','app/servicesModule','jquery','bootstrap','angular','angularUIRouter','angularAnimate'],
    function() {
        'use strict';

        angular.bootstrap(document, ['eLearningApp']);
    }
);