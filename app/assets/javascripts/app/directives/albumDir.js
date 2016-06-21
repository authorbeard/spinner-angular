function Album(userAlbumFactory, albumFactory){
    return {
      scope: {
          data: '='
      },
      
      controller: function($scope){

          this.albDetails=$scope.data.album
          this.spins=$scope.data.spins
          this.last=$scope.data.last_spun
          this.cover=$scope.data.album.cover
          this.artist = {
                    id: $scope.data.album.artist.id,
                    name: $scope.data.album.artist.name 
                    }
          

          this.spin=function(uAlb){
              this.spins ++
              this.last=Date.now()
          }
  
      },
      controllerAs: 'album',
      
      link: function($scope, $elem, $attrs, $ctrl){
            $elem.on('click', function(){
                console.log('update the album on the backend here')
                userAlbumFactory.update({id: $ctrl.albDetails.id}, function(resp){
                    $ctrl.spin(resp.album)    
                })
            })
      },

      templateUrl: 'app/views/albumTile.html',
      
    }

}

angular
   .module('app')
   .directive('album', Album)