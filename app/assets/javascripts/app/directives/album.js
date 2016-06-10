function Album(){
    return {
      restrict: 'E', 
      // replace: true,
      transclude: true,
      scope: {
          album: '=data'
      },
      templateUrl: 'app/views/albumTile.html',
      controller: function($scope){
        // debugger;
          this.album=$scope.album
      }
      
    }

}

angular
   .module('app')
   .directive('album', Album)