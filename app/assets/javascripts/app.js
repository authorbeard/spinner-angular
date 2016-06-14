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
                onEnter: function($state){
                        if (sessionStorage['currUser']){
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
                onEnter: function($state){
                    console.log('top of user onEnter')
                        if (!sessionStorage['currUser']){
                            console.log('redirect from user onEnter')
                            $state.go('home.auth', {}, {reload: true})
                        }
                },
                resolve: {
                         userAlbums: function($state, $stateParams, userAlbumFactory){
                                if (sessionStorage['currUser']){
                                console.log('session info, resolving ualbums')
                                    return userAlbumFactory.show({album_id: $stateParams.id}).$promise
                                }else{
                                console.log('no session info, onEnter should redirect')
                                }
                            
                      }
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
                        showAlbum: function($state, $stateParams, albumFactory){
                            console.log('album show resolve')
                            return albumFactory.show({id: $stateParams.id}).$promise
                        }
                },                
            })


            .state('home.album.edit',{
                url: 'albums/:id/edit',
                templateUrl: 'app/views/albumDetail.html',
                controller: 'AlbumCtrl as album'
            })

        $urlRouterProvider.otherwise('auth')


    })