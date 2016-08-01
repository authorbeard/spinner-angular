function UserCtrl($scope, userAlbums, $filter){
    var ctrl = this

    ctrl.currUser = $scope.$parent.currUser
    ctrl.userAlbums = userAlbums

    ctrl.selection = 20

    ctrl.getDispAlbums=function(){
        ctrl.displayAlbums = ctrl.userAlbums.slice(0, ctrl.selection)
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
        if (sortType === 'never'){
            ctrl.displayAlbums=userAlbums.filter(function(album){
                return album.spins === 0
             })
         }else if (sortType === 'most'){
          console.log('elseif')
            var spunAlbs=userAlbums.filter(function(album){
                return album.spins !== 0
              })
            ctrl.property="spins"
            ctrl.reverse=true
            ctrl.displayAlbums=$filter('orderBy')(spunAlbs, ctrl.property, ctrl.reverse)
         }else if (sortType === 'alpha'){
            ctrl.displayAlbums=$filter('orderBy')(userAlbums, 'album.artist.name')
         }else if (sortType === 'reset'){
            ctrl.getDispAlbums()
         }
        $scope.$apply()

       }

}
  UserCtrl.$inject = ['$scope', 'userAlbums', '$filter']

angular 
    .module('app')
    .controller('UserCtrl', UserCtrl)