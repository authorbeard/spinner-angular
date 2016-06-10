function Library($resource) {
    console.log('spinnerApi')

    var album = $resource('/albums/', {
          query: { method: 'GET',
                   // isArray: true,
                   transformResponse: function(data, header){
                        console.log(JSON.parse(data))
                        return JSON.parse(data)
                  }},
          patch: { method: 'PATCH', 
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

angular
    .module('app')
    .factory('Library', Library)