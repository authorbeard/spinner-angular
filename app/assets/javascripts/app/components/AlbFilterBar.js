var AlbFilterBar = {
    transclude: true,
    templateUrl: 'app/views/albumsFilter.html',
    bindings: {
            data: "="
        },
    controller: function($scope){
            this.albums = this.data
        }

}


angular
    .module('app')
    .component('albFilterBar', AlbFilterBar)