function Album(userAlbumFactory, albumFactory){
    return {
      // scope: {
      //     album: '='
      // },
      transclude: true,
      controller: function($scope){
          // debugger;
          this.spin=function(newAlb){
            debugger;
              // THE BELOW WORKS, BUT ONLY ON THIS SCOPE
              $scope.album = newAlb
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
                // $scope.$emit('spin', response)
                })
            $scope.$apply()
            })


            $elem.addClass('ng-mouseenter="alert()"')


      },

      templateUrl: 'app/views/albumTile.html',
      
    }

}

angular
   .module('app')
   .directive('album', Album)