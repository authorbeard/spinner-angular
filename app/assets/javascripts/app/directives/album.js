function Album(){
    return {
      // transclude: true,
      templateUrl: 'app/views/albumTile.html',
      controller: function($scope){
        // debugger;
      }



      
    }

}

angular
   .module('app')
   .directive('album', Album)