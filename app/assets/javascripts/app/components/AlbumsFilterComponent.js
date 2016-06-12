function AlbumsFilter(){
    return {
        templateUrl: 'app/views/albumsFilter.html',
        bindings: {
            albums: "="
        },
        // controller: UserCtrl,
        // controllerAs: 'users',
        link: function(){
            debugger;
        }
    }
}


angular
    .module('app')
    .component('albumsFilter', AlbumsFilter)