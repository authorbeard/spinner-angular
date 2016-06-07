angular 
    .module('app', ['ui.router', 
                    'templates',
                    'Devise',
                    'ngCookies'
                    ])
    .config(function ($stateProvider, $urlRouterProvider, $httpProvider, AuthProvider){
        $httpProvider.defaults.withCredentials = true;


        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'app/views/home.html',
                controller: 'HomeCtrl as home',

            })

            .state('home.login', {
                url: 'login',
                templateUrl: 'app/views/login.html',
                controller: 'HomeCtrl as home'
            })


        $urlRouterProvider.otherwise('/')


    })