angular 
    .module('app', ['ui.router', 
                    'templates',
                    'Devise'

                    ])
    .config(function ($stateProvider, $urlRouterProvider){
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'app/views/home.html',
                controller: 'HomeCtrl as home'


            })


        $urlRouterProvider.otherwise('/')


    })