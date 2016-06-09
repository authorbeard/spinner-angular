function HomeCtrl(Auth, $scope, $state, $http){

    Auth.currentUser()
        .then(function(user){
        debugger;
            $scope.user=user.user
        })



    $scope.$on('devise:login', function(event, currentUser) {
        debugger;
        // alert('Hey there, ' + currentUser.user.name )
        $state.go($state.current, {user:currentUser}, {reload: true})
    });

    $scope.$on('devise:new-session', function(event, currentUser) {
        debugger;
    });

    $scope.$on('devise:logout', function(event, oldCurrentUser){
     debugger;
      $state.go('/')
    })


}

angular 
    .module('app')
    .controller('HomeCtrl', HomeCtrl)