function AlbFilterDir (){
    return {
            transclude: true,
            templateUrl: 'app/views/albumsFilter.html',
            scope: {
                    data: "="
                },
            controller: function($scope){
                // debugger;
                    this.albums = $scope.data
                },
            controllerAs: 'albFilter',
            link: function($scope, elem, attrs, ctrl){
                var selector=elem.find('button')
                selector.on('click', function(){
                    var filter=this.dataset.type
                    $scope.$emit('spinFilter', filter)
                })
            }
        }
}


angular
    .module('app')
    .directive('albFilterDir', AlbFilterDir)