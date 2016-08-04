// app.js
var eLearningApp = angular.module('eLearningApp', ['ui.router','ngAnimate']);

eLearningApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: 'partials/partial-home.html',
        })
         .state('register', {
            url: '/register',
            templateUrl: 'partials/register.html',
            controller: 'registrationController'
        })
         .state('afterRegister', {
            url: '/afterRegister',
            templateUrl: 'partials/afterRegister.html',
            controller: 'registerSuccessController'
        })
         .state('courseDetails', {
             url: '/details?name&link',
              
              views:{
                 '': {
                   templateUrl: 'partials/courseDetails.html',
                    controller: 'courseDetailsCntrl'
                   
                },  
                'details@courseDetails':{
                    templateUrl: 'partials/details.html',


                 },
                 'link@courseDetails':{
                    templateUrl: 'partials/link.html'
                 }
              }
               
        })
        ;
        

       
        
});