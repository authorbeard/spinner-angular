function UserCtrl($scope, userAlbums, $filter){
    var ctrl = this

    ctrl.currUser = $scope.$parent.currUser
    $scope.userAlbums = userAlbums

    ctrl.selection = 20

    ctrl.getDispAlbums=function(){
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

console.log(sortType)
        if (sortType === 'never'){
            $scope.displayAlbums=userAlbums.filter(function(album){
                return album.spins === 0
             })
         }else if (sortType === 'most'){

          console.log('elseif')
            var spunAlbs=userAlbums.filter(function(album){
                return album.spins !== 0
              })
            $scope.property="spins"
            $scope.reverse=true
            $scope.displayAlbums=$filter('orderBy')(spunAlbs, $scope.property, $scope.reverse)

         }else if (sortType === 'alpha'){
            $scope.displayAlbums=$filter('orderBy')(userAlbums, 'album.artist.name')
         }else if (sortType === 'reset'){
            ctrl.getDispAlbums()
         }
        $scope.$apply()

       }

    $scope.$on('spin', function(event, alb){

      $scope.userAlbums[alb.id].spins=alb.spins
      debugger;
    })






}

angular 
    .module('app')
    .controller('UserCtrl', UserCtrl)