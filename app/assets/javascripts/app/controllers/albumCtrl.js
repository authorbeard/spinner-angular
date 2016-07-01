function AlbumCtrl($scope, showAlbum, userAlbumFactory){
    var ctrl=this
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

    ctrl.spin = function(id){
        userAlbumFactory.update({album_id: id}, function(resp){
        ctrl.data.spins ++
        ctrl.data.last=Date.now()
      })
    }



}

angular 
    .module('app')
    .controller('AlbumCtrl', AlbumCtrl)