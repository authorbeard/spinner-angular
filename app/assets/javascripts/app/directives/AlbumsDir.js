function Albums (){
  return {
      scope: {
          albums: "=data"
      },
      
      controller: function($scope){
          this.albums = $scope.albums
          this.showMore=function(){
          }
      },
      controllerAs: 'albums',
      link: function($scope, $elem, $attrs, $ctrl){
      
      },

      templateUrl: 'app/views/albumsFull.html',


  }
}

angular
    .module('app')
    .directive('albums', Albums)