function HomeCtrl(Auth, $cookies, $scope, $state){
    this.message = "home controller, bitches"

    Auth.currentUser().then(function(user){
          this.user = user
        }, function(error){
          this.user = "unauthorized"
        })


    $scope.$on('devise:unauthorized', function(event, xhr, deferred) {
      // Disable interceptor on _this_ login request,
      // so that it too isn't caught by the interceptor
      // on a failed login.
    debugger;
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



}

angular 
    .module('app')
    .controller('HomeCtrl', HomeCtrl)