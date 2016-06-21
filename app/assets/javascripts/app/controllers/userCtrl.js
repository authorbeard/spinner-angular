function UserCtrl($scope, userAlbums, $filter){
    var ctrl = this

    ctrl.currUser = $scope.$parent.currUser
    $scope.userAlbums = userAlbums

    ctrl.selection = 20

    ctrl.getDispAlbums=function(){
      debugger;
        $scope.displayAlbums = $scope.userAlbums.slice(0, ctrl.selection)
    }

    ctrl.getDispAlbums()


    ctrl.addMore=function(){
          ctrl.selection += 20
          ctrl.getDispAlbums()
    }


    $scope.$on('spinFilter', function(event, type){
      console.log('message received')
        ctrl.spinOpts(type)
    })

    ctrl.spinOpts=function(sortType){
// debugger;
console.log(sortType)
        if (sortType === 'never'){
            $scope.displayAlbums=userAlbums.filter(function(album){
                return album.spins === 0
             })
            // $scope.$apply()
         }else if (sortType === 'most'){
    // debugger;
          console.log('elseif')
            var spunAlbs=userAlbums.filter(function(album){
                return album.spins !== 0
              })
            $scope.property="spins"
            $scope.reverse=true
            $scope.displayAlbums=$filter('orderBy')(spunAlbs, $scope.property, $scope.reverse)
// debugger;
            // $scope.$apply()
         }else if (sortType === 'alpha'){
        // debugger;
            // $scope.property="album.artist.name"
            $scope.displayAlbums=$filter('orderBy')(userAlbums, 'album.artist.name')
            // $scope.$apply()
         }else if (sortType === 'reset'){
            ctrl.getDispAlbums()
         }
        $scope.$apply()
// debugger;
       }





}

angular 
    .module('app')
    .controller('UserCtrl', UserCtrl)