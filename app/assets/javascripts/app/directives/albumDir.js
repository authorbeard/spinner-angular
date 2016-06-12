function Album(userAlbumFactory, albumFactory){
    return {
      scope: {
          data: '='
      },
      
      controller: function($scope){

          this.album=$scope.data.album
          this.spins=$scope.data.spins
          this.last=$scope.data.last_spun
          this.artist=this.album.artist
          this.cover=this.album.cover

          // this.spin=function(){
          //     this.spins ++
          // }
  
      },
      controllerAs: 'album',
      
      link: function($scope, $elem, $attrs, $ctrl){
            $elem.on('click', function(){
                // $ctrl.spin()
                console.log('update the album on the backend here')
                userAlbumFactory.update($ctrl.album, function(resp){
                    debugger;
                    $scope.$emit('albSpin', resp.user_album)
                })
            })
      },

      templateUrl: 'app/views/albumTile.html',
      
    }

}

angular
   .module('app')
   .directive('album', Album)