function Album(userAlbumFactory, albumFactory){
    return {
      scope: {
          data: '='
      },
      
      controller: function($scope){
          $scope.isActive=function(){
            console.log('is active')
            // debugger;
          }
          // var update=$scope.data
          // this.spin=function(uAlb){
          //   debugger;
          //     update=userAlbumFactory.update({id: uAlb.id, spins: uAlb.spins + 1}, function(response){
          //       return response
          //       debugger;
          //       // $scope.$emit('spin', response)
          //     })
          //   $scope.$apply
          // }
      },
      controllerAs: 'alb',
      link: function($scope, $elem, $attrs, $ctrl){
            var album=$scope.data
            // debugger;
            var btn=$elem.find('button')
            btn.on('click', function(){
              debugger;
                album=userAlbumFactory.update({id: album.id, spins: (album.spins + 1)}, function(response){
                // return response
                $scope.$emit('spin', response)
              })
              // $scope.data=album
            })

            $elem.addClass('ng-mouseenter="alert()"')


      },

      templateUrl: 'app/views/albumTile.html',
      
    }

}

angular
   .module('app')
   .directive('album', Album)