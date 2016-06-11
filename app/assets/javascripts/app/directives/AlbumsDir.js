function Albums (){
  return {
      scope: {
          albums: "=data"
      },
      template: 'app/views/albumFull.html',
      controller: function($scope){
          debugger;
          this.albums = $scope.albums
      },
      controllerAs: 'albums',
      link: function($scope, $elem, $attrs, $ctrl){
        debugger;
      }


  }
}

angular
    .module('app')
    .directive('albums', Albums)