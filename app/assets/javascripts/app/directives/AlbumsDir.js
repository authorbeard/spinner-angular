function Albums (){
  return {
      scope: {
          albums: "=data"
      },
      controller: function($scope){
          this.albums = $scope.albums

      },
      controllerAs: 'albums',
      link: function($scope, $elem, $attrs, $ctrl){
          // debugger;
          // $scope.$on('spin', function(event){
          //   debugger;
          // })
      },

      templateUrl: 'app/views/albumsFull.html',


  }
}

angular
    .module('app')
    .directive('albums', Albums)