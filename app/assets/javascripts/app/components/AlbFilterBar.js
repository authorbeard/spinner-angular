var AlbFilterBar = {
    transclude: true,
    templateUrl: 'app/views/albumsFilter.html',
    bindings: {
            data: "="
        },
    controller: function($scope){
            this.albums = this.data
            this.filterSpins=function(filter){
                var type = filter
                $scope.$emit('spinFilter', filter)
            }
        }
    // controller: UserCtrl,

}


angular
    .module('app')
    .component('albFilterBar', AlbFilterBar)