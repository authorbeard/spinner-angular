function neverSpun(){
    return function(albums, never){
        return albums.filter(function(album){
            return album.spins === 0
        })
    }


}

angular 
    .module('app')
    .filter('neverSpun', neverSpun)