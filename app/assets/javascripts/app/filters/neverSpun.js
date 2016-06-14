function neverSpun(){
    return function(albums, never){
      debugger;
        return albums.filter(function(album){
            return album.spins === 0
        })
    }


}

angular 
    .module('app')
    .filter('neverSpun', neverSpun)