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
                resolve: {
                    user: function(Auth){
                        return Auth.currentUser().then(function(user){
                debugger;
                            return user.user
                            console.log(user)
                        }, function(error){
                debugger;
                            console.log(error)
                        })
                    }
                }

            })

            /// Display user info/collection here ///
            .state('user', {
                url: 'user/:id',
                templateURL: 'app/views/user.html',
                controller: 'UserCtrl as user',
                // resolve: {
                //     user: function(Auth){
                //         return Auth.currentUser()
                //     }
                // }
            })


            /// All unauthorized users go here to register/login
            /// No auto-redirect, just no other choice on homepage
            .state('user.auth', {
                url: 'auth',
                templateUrl: 'app/views/auth.html',
                controller: 'HomeCtrl as home'
            })

            .state('albums', {
                url: 'albums', 
                templateUrl: 'app/views/albums.html', 
                controller: 'AlbumCtrl as albums'
            })

            .state('albums.detail', {
                url: 'albums/:id',
                templateUrl: 'app/views/album.html',
                controller: 'AlbumCtrl as albums'
            })


        $urlRouterProvider.otherwise('/')


    })