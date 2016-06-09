function HomeCtrl(Auth, $scope, $state, $http){
    var home = this 

    home.errors = []

    Auth.currentUser()
        .then(function(user){
            $scope.user=user.user
        })

    home.logout = Auth.logout

    $scope.$on('devise:login', function(event, userObj) {
        $scope.user = userObj.user
        $state.go('home.user', {id: userObj.user.id })
    });

    $scope.$on('devise:new-session', function(event, userObj) {
        $scope.user = userObj.user
        $state.go('home.user', {id: userObj.user.id })
    });

    $scope.$on('devise:logout', function(event, userObj){
        // alert('So long, ' + userObj.user.name)
        $scope.user = null
        $state.go('home.auth')
    })

    $scope.$on('devise:unauthorized', function(event, xhr, deferred){
        deferred.reject()
    })

}

angular 
    .module('app')
    .controller('HomeCtrl', HomeCtrl)