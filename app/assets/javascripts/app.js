angular 
    .module('app', ['ui.router', 'templates', 'Devise', 'ngCookies', 'ngMessages', 'ngResource', 'ui.bootstrap'])
    .config(['$stateProvider', '$urlRouterProvider', '$httpProvider', 'AuthProvider', 'AuthInterceptProvider', function ($stateProvider, $urlRouterProvider, $httpProvider, AuthProvider, AuthInterceptProvider){
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
                onEnter: ['$state', function($state){
                        if (sessionStorage['currUser']){
                            debugger;
                            var user = JSON.parse(sessionStorage['currUser'])
                            $state.go('home.user', {id: user.id})
                        }
                    }]
            })

            .state('home.user', {
                url: 'users/:id',
                templateUrl: 'app/views/user.html',
                controller: 'UserCtrl as user',
                controllerAs: 'user',
                onEnter: ['$state', function($state){
                        if (!sessionStorage['currUser']){
                            $state.go('home.auth', {}, {reload: true})
                        }
                }],
                resolve: {
                         userAlbums: ['$state', '$stateParams', 'userAlbumFactory', function($state, $stateParams, userAlbumFactory){
                                    if (sessionStorage['currUser']){
                                        var user = JSON.parse(sessionStorage['currUser'])
                                        return userAlbumFactory.index({user_id: user.id}).$promise
                                    }else{
                                    }
                                
                                }]
                        },

            })

            .state('home.user_album', {
                url: 'user/:user_id/user_albums/:id',
                templateUrl: 'app/views/albumDetail.html',
                controller: 'AlbumCtrl as album',
                resolve: {
                          showAlbum: ['$stateParams', 'userAlbumFactory', function($stateParams, userAlbumFactory){  
                                var user=JSON.parse(sessionStorage['currUser'])
                                return userAlbumFactory.show({ user_id: user.id, id: $stateParams.id }).$promise
                        }]
                },
            })

            .state('home.newalbum', {
                url: 'albums/new',
                templateUrl: 'app/views/albumNew.html',
                controller: 'NewAlbumCtrl as new'

            })

            .state('home.album', {
                url: 'albums/:id',
                templateUrl: 'app/views/albumDetail.html',
                controller: 'AlbumCtrl as album',
                resolve: {
                        showAlbum: ['$stateParams', 'albumFactory', function($stateParams, albumFactory){
                            return albumFactory.show({id: $stateParams.id}).$promise
                        }]
                },                
            })


            .state('home.album.edit',{
                url: 'albums/:id/edit',
                templateUrl: 'app/views/albumDetail.html',
                controller: 'AlbumCtrl as album'
            })

        $urlRouterProvider.otherwise('auth')


    }])