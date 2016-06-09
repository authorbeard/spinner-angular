angular 
    .module('app', ['ui.router', 
                    'templates',
                    'Devise',
                    'ngCookies',
                    'ngMessages'
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
                onEnter: function(Auth, $state){
                    Auth.currentUser().then(function(resp){
                        if (resp.user){
                            // debugger;
                            $state.go('home.user', {id: resp.user.id})
                        }
                    })
                }
            })

            .state('home.user', {
                url: 'user/:id',
                templateUrl: 'app/views/user.html',
                controller: 'UserCtrl as user',
                resolve: {
                      user: function(SessionSvc){
                          return SessionSvc.currentUser
                      }
                },
                onEnter: function(Auth, $state, SessionSvc){
                    // debugger;
                    if (!SessionSvc.currentUser){
                        $state.go('home.auth')
                    }

                }

            })

        $urlRouterProvider.otherwise('auth')


    })