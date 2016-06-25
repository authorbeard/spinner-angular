function Album(userAlbumFactory, albumFactory){
    return {
      scope: {
          data: '='
      },
      
      controller: function($scope){
// debugger;
          $scope.album = $scope.data


          this.spin=function(uAlb){
              this.spins ++
              this.last=Date.now()

          }
  
      },
      controllerAs: 'alb',
      
      link: function($scope, $elem, $attrs, $ctrl){
            // debugger;
            $elem.on('click', function($attrs){
                debugger;              
                console.log('update the album on the backend here')
                userAlbumFactory.update({id: $ctrl.albDetails.id}, function(resp){
                  debugger;
                  // $ctrl.spin(resp.album)    
                  // $ctrl.albums // [{}. {}]
                  // $scope.albums // [{}. {THIS CURRENT ALBUM}]
                  // // You need to find that object (the JS object of this album that is rednered through ng-repeat ctrl.albums)
                  // and update that JS object with the resp.spon data.
                  console.log(resp, this)
                  // $braodcast("albumUpdate", resse)
                })
                // this.spins = resp.spins

            })
      },

      templateUrl: 'app/views/albumTile.html',
      
    }

}

angular
   .module('app')
   .directive('album', Album)