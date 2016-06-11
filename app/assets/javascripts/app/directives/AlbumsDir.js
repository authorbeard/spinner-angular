function Albums (){
  return {
      scope: {
          albums: "=data"
      },
      
      controller: function($scope){
          // debugger;
          this.albums = $scope.albums
      },
      controllerAs: 'albums',
      link: function($scope, $elem, $attrs, $ctrl){
        // debugger;

      },

      templateUrl: 'app/views/albumFull.html',


  }
}

angular
    .module('app')
    .directive('albums', Albums)