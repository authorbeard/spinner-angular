function NewAlbumCtrl($state, albumFactory){
    var ctrl=this
    // debugger;

    // Auth.currentUser().then(function(whut){
    //   debugger;
    // })

    ctrl.create = function(){
  
        var albInfo = {
                title: this.album.title,
                artist_attributes: {
                    name: this.album.artist 
                  },
                songs_attributes: {
                    titles: this.album.songs
                  }
              } 
        // debugger;
        this.album = albumFactory.create({album: albInfo}, function(response){
          debugger;
          alert('new album created!')
          $state.go('home.album', {id: response.album.id})
        })
    }

}

  NewAlbumCtrl.$inject = ['$state', 'albumFactory']


angular
    .module('app')
    .controller('NewAlbumCtrl', NewAlbumCtrl)