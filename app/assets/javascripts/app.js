angular 
    .module('app', ['ui.router', 
                    'templates',
                    'Devise',
                    'ngCookies',
                    'ngMessages',
                    'ngResource',
                    'infinite-scroll'
                    ])
    .config(function ($stateProvider, $urlRouterProvider, $httpProvider, AuthProvider, AuthInterceptProvider){
        $httpProvider.defaults.withCredentials = true;
        AuthInterceptProvider.interceptAuth(true)

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'app/views/home.html',
                controller: 'HomeCtrl as home',
                abstract: true

            })

            .state('home.auth', {
                url: 'auth', 
                templateUrl: 'app/views/auth.html',
                controller: 'SessionCtrl as session',
                onEnter: function(){
                        if (sessionStorage['currUser']){
                            debugger;
                            console.log('redirect from auth')
                            var user = JSON.parse(sessionStorage['currUser'])
                            $state.go('home.user', {id: user.id})
                        }
                    }
            })

            .state('home.user', {
                url: 'user/:id',
                templateUrl: 'app/views/user.html',
                controller: 'UserCtrl as user',
                // resolve: {
                //       // THIS IS WHERE I'LL SEND THE SESSION INFO TO BACKEND SERVICE TO GET ALBUMS
                //       user: function()

                //       }
                // },
                onEnter: function($state){
                    //THIS NEEDS TO EMIT AN ALERT TO BE PICKED UP BY A DIRECTIVE THAT
                    //WILL RENDER THE LOGIN PAGE/TEMPLATE/DIALOG
                        // debugger;
                        // console.log('user onEnter sez: ' + sessionStorage['currUser'])
                        if (!sessionStorage['currUser']){
                            // debugger;
                            $state.go('home.auth', {reload: true})
                        }
                }

            })

        $urlRouterProvider.otherwise('auth')


    })