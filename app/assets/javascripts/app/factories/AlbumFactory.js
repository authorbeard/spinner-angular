function AlbumFactory($resource) {

    var album = $resource('/albums/:id', {id: '@id'}, {
          show: { method: 'GET',
                   // isArray: true,
                   transformResponse: function(data, header){
                        // console.log(JSON.parse(data))
                        return JSON.parse(data)
                  }},
          update: { method: 'PATCH', 
                    transformResponse: function(data, header){
                        console.log(JSON.parse(data))
                        return JSON.parse(data)
                  }},
          create: { method: 'POST', 
                     transformResponse: function(data, header){
                        console.log(JSON.parse(data))
                        return JSON.parse(data)
                  }},
          destroy: { method: 'DELETE'}

    })


    return album


}
  AlbumFactory.$inject = ['$resource']

angular
    .module('app')
    .factory('albumFactory', AlbumFactory)