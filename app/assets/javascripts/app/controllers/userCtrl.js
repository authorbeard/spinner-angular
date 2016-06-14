function UserCtrl($scope, userAlbums, $filter){
    var ctrl = this
    
    ctrl.currUser = $scope.$parent.currUser
    ctrl.userAlbums = userAlbums
    ctrl.filterAlbums = $filter('orderBy')(ctrl.userAlbums, 'album.artist.name')
    console.log(ctrl.userAlbums)

    ctrl.selection = 10

    ctrl.getDispAlbums=function(){
        ctrl.displayAlbums = ctrl.filterAlbums.slice(0, ctrl.selection)
    }

    
    ctrl.addMore=function(){
          ctrl.selection += 10
          ctrl.getDispAlbums()
          $scope.$emit('addAlbums', event)
    }

    ctrl.getDispAlbums()


    $scope.$on('spinFilter', function(event, type){
        // event.preventDefault()
        ctrl.spinOpts(type)

    })

    ctrl.spinOpts=function(sortType){

        if (sortType === 'never'){
            ctrl.displayAlbums=ctrl.userAlbums.filter(function(album){
                return album.spins === 0
             })
         }else if (sortType === 'most'){
          // debugger;
            var filterAlbs=ctrl.userAlbums.filter(function(album){
                return album.spins !== 0
              })
          // debugger;
            ctrl.displayAlbums=filterAlbs.sort(function(a, b){
               // debugger;
                if (a.spins < b.spins){
                    return 1
                }
                if (a.spins > b.spins){
                    return -1
                }
            })
         }else{
            // ctrl.displayAlbums=$filter('orderBy')(userAlbums, 'album.artist.name')
         }
       }





}

angular 
    .module('app')
    .controller('UserCtrl', UserCtrl)