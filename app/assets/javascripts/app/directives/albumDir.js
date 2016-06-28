function Album(userAlbumFactory, albumFactory){
    return {
      scope: {
          data: '='
      },
      
      controller: function($scope){
        this.album=$scope.data

          this.spin=function(newAlb){
            debugger;
              // $scope.data.spins ++
              $scope.data = newAlb
          }
      },
      controllerAs: 'alb',
      link: function($scope, $elem, $attrs, $ctrl){
            var album=$scope.data
            // debugger;
            var btn=$elem.find('button')
            btn.on('click', function(){
              // debugger;
                newAlb=userAlbumFactory.update({id: album.id, spins: (album.spins + 1)}, function(response){
                // debugger;
                $ctrl.spin(newAlb)
                // $scope.$emit('spin', response)
                })
            //   // $scope.data=album
            })

            $elem.addClass('ng-mouseenter="alert()"')


      },

      templateUrl: 'app/views/albumTile.html',
      
    }

}

angular
   .module('app')
   .directive('album', Album)