function Album(userAlbumFactory, albumFactory){
    return {
      controller: function($scope){

          this.spin=function(newAlb){
              $scope.album.spins=newAlb.spins
              $scope.album.last_spun=newAlb.last_spun
          }
      },
      controllerAs: 'alb',
      link: function($scope, $elem, $attrs, $ctrl){
            var alb=$scope.album
            var btn=$elem.find('button')
            var ctrl=$ctrl
            btn.on('click', function(){
                var newAlb=userAlbumFactory.update({id: alb.id, spins: (alb.spins + 1)}, function(response){
                alb=newAlb
                $ctrl.spin(newAlb)
                })
            })
      },
      templateUrl: 'app/views/albumTile.html',      
    }

}

angular
   .module('app')
   .directive('album', Album)