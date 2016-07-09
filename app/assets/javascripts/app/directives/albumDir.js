function Album(userAlbumFactory, albumFactory){
    return {
      controller: ['$scope', function($scope){
          var ctrl = this
          ctrl.updateObj = {
              user_id: $scope.currUser.id,
              id: $scope.album.id,

          }
          ctrl.spin=function(newAlb){
              $scope.album.spins=newAlb.spins
              $scope.album.last_spun=newAlb.last_spun
          }
          ctrl.currUser=$scope.currUser
      }],
      controllerAs: 'alb',
      link: function($scope, $elem, $attrs, $ctrl){

            var btn=$elem.find('button')
            btn.on('click', function(){
                $ctrl.updateObj['spins'] = $scope.album.spins + 1
                var newAlb = userAlbumFactory.update($ctrl.updateObj, function(response){
                $ctrl.spin(newAlb)
                })
            })
      },
      templateUrl: 'app/views/albumTile.html',      
    }

}

  Album.$inject = ['userAlbumFactory', 'albumFactory']

angular
   .module('app')
   .directive('album', Album)