function Albums (){
  return {
      scope: {
          data: "="
      },
      controller: function($scope){
          this.albums = $scope.data
      },
      controllerAs: 'albsDir',
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