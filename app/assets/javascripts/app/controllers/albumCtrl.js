function AlbumCtrl($scope, showAlbum, userAlbumFactory){
    var ctrl=this
    ctrl.currUser=$scope.currUser
    console.log('album show ctrl')

    var showAlbum = showAlbum
    ctrl.setAlbum = function(showAlbum) {
        if (showAlbum.albums){
            ctrl.data=showAlbum.albums[0]
            console.log(ctrl.data)
        }else{
            ctrl.data=showAlbum
        }
      }

    ctrl.setAlbum(showAlbum)

    ctrl.spin = function(){
        userAlbumFactory.update({user_id: ctrl.currUser.id, id: ctrl.data.id, spins: ctrl.data.spins+1}, function(resp){
            ctrl.data=resp
      })
    }

}

    AlbumCtrl.$inject = ['$scope', 'showAlbum', 'userAlbumFactory']

angular 
    .module('app')
    .controller('AlbumCtrl', AlbumCtrl)