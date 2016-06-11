function Album(){
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

          this.spin=function(){
              this.spins ++
          }
  
      },
      controllerAs: 'album',
      
      link: function($scope, $elem, $attrs, $ctrl){
        // debugger;
            console.log('album detail link')
            $elem.on('click', function(){
                $ctrl.spin()
                $scope.$emit('albSpin', $ctrl.album)
                $scope.$apply()
            })
      },

      templateUrl: 'app/views/albumTile.html',
      
    }

}

angular
   .module('app')
   .directive('album', Album)