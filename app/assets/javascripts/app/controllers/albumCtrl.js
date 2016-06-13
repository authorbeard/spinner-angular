function AlbumCtrl($scope, showAlbum){
debugger;
    console.log(showAlbum)
    console.log('album show ctrl')
    // this.album=showAlbum.album

    this.setAlbum=function(showAlbum) {
    debugger;
        if (showAlbum.albums){
            this.album=showAlbum.albums[0]
        }else{
            this.album=showAlbum.album
        }
      }

    this.setAlbum()
    console.log(this.album)



  

}

angular 
    .module('app')
    .controller('AlbumCtrl', AlbumCtrl)