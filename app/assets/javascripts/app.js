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
            })

            /// Display user info/collection here ///
            .state('user', {
                url: 'user/:id',
                templateURL: 'app/views/user.html',
                controller: 'UserCtrl as user',
                resolve: {
                    user: function(Auth){
                        return Auth.currentUser()
                    }
                }
            })

            // .state('user.login', {
            //     url: 'login',
            //     templateUrl: 'app/views/auth.html',
            //     controller: 'DeviseCtrl'
            // })

            // .state('albums', {
            //     url: 'albums', 
            //     templateUrl: 'app/views/albums.html', 
            //     controller: 'AlbumCtrl as albums'
            // })

            // .state('albums.detail', {
            //     url: 'albums/:id',
            //     templateUrl: 'app/views/album.html',
            //     controller: 'AlbumCtrl as albums'
            // })


        $urlRouterProvider.otherwise('/')


    })