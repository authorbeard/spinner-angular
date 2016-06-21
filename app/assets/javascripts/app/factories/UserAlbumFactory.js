function UserAlbumFactory($resource) {
    console.log('userAlbumFactory')

    var useralbum = $resource('/user_albums/:id', {id: '@id'}, {
          index: { method: 'GET',
                   isArray: true,
                   transformResponse: function(data, header){
                        return JSON.parse(data).user_albums
                  }},
          show: { method: 'GET',
                   isArray: true,
                   transformResponse: function(data, header){
                        return JSON.parse(data).user_albums
                  }},
          update: { method: 'PATCH', 
                    transformResponse: function(data, header){
                        // console.log(JSON.parse(data))
                        return JSON.parse(data)
                  }},
          create: { method: 'POST', 
                     transformResponse: function(data, header){
                        // console.log(JSON.parse(data))
                        return JSON.parse(data)
                  }},
          destroy: { method: 'DELETE'}
    })


    return useralbum


}

angular
    .module('app')
    .factory('userAlbumFactory', UserAlbumFactory)