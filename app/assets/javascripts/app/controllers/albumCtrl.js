function AlbumCtrl($scope, showAlbum){
debugger;
    console.log('album show ctrl')
    this.showAlbum=showAlbum
  

}

angular 
    .module('app')
    .controller('AlbumCtrl', AlbumCtrl)