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
                debugger;
                $scope.$emit('spinFilter', filter)
                alert('you prob shoulda deleted this')
            }
        },
}


angular
    .module('app')
    .component('albFilterBar', AlbFilterBar)