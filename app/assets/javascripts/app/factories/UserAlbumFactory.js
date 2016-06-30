function UserAlbumFactory($resource) {
    console.log('userAlbumFactory')

    var detail = 'user/:user_id/user_albums/:id'
    var index = 'user_albums/:id'
    var params = { user_id: '@user_id',
                   id: '@id'
                 }

    var useralbum = $resource(index, params,  {
          index: { method: 'GET',
                   isArray: true,
                   transformResponse: function(data, header){
                        return JSON.parse(data).user_albums
                  }},
          show: { method: 'GET',
                   // isArray: true,
                   transformResponse: function(data, header){
                    console.log(JSON.parse(data).user_album)
                        return JSON.parse(data).user_album
                  }},
          update: { "params": {'type': '@type'},
                    method: 'PATCH', 
                    transformResponse: function(data, header){
                        // console.log(JSON.parse(data))
                        return JSON.parse(data).user_album
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