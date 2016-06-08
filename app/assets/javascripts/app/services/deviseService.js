function DeviseService(Auth){

  this.deviseLogin = function(){
      Auth.login(credentials)
  }

  $scope.$on('devise:unauthorized', function(event, xhr, deferred) {
            // Disable interceptor on _this_ login request,
            // so that it too isn't caught by the interceptor
            // on a failed login.
            var config = {
                interceptAuth: false
            };

            // Ask user for login credentials
            Auth.login(credentials, config).then(function() {
                // Successfully logged in.
                // Redo the original request.
                return $http(xhr.config);
            }).then(function(response) {
                // Successfully recovered from unauthorized error.
                // Resolve the original request's promise.
                deferred.resolve(response);
            }, function(error) {
                // There was an error logging in.
                // Reject the original request's promise.
                deferred.reject(error);
            });
        });

        // Request requires authorization
        // Will cause a `401 Unauthorized` response,
        // that will be recovered by our listener above.
        $http.delete('/users/1', {
            interceptAuth: true
        }).then(function(response) {
            // Deleted user 1
        }, function(error) {
            // Something went wrong.
        });



}

angular 
    .module('app')
    .service('DeviseService', DeviseService)



