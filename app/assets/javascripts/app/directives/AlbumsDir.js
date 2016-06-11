function Albums (){
  return {
      scope: {
          albums: "=data"
      },
      
      controller: function($scope){
          // debugger;
          this.albums = $scope.albums

          this.showMore=function(){
            
          }
      },
      controllerAs: 'albums',
      link: function($scope, $elem, $attrs, $ctrl){
          // $scope.$on('addAlbums', function(event){
          //   // debugger;
          //      console.log('adding!')
          //      // $ctrl.showMore()
          // })
          

      },

      templateUrl: 'app/views/albumFull.html',


  }
}

angular
    .module('app')
    .directive('albums', Albums)