function Album(){
    return {
      restrict: 'E', 
      transclude: true,
      require: '^albums'
      scope: {
          album: '=data'
      },
      templateUrl: 'app/views/albumTile.html',
      link: function($scope, $element, $attrs, $ctrl){
        debugger;
      }



      
    }

}

angular
   .module('app')
   .directive('album', Album)