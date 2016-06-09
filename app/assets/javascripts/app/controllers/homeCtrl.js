function HomeCtrl(Auth, $scope, $state, $http, SessionSvc){
    var home = this 

    home.errors = []

    $scope.currentUser = null

    home.logout = Auth.logout

    $scope.$on('devise:login', function(event, userObj) {
        console.log('prev authenticated session')
        $scope.currentUser = userObj.user
        SessionSvc.create(userObj)
        $state.go('home.user', {id: userObj.user.id })
    });

    $scope.$on('devise:new-session', function(event, userObj) {
        console.log('new login')
        $scope.currentUser = userObj.user
        $state.go('home.user', {id: userObj.user.id })
    });

    $scope.$on('devise:logout', function(event, userObj){
        // alert('So long, ' + userObj.user.name)
        SessionSvc.destroy()
        $scope.currentUser = null
        $state.go('home.auth', {}, {reload: true})
    })

    $scope.$on('devise:unauthorized', function(event, xhr, deferred){
        // debugger;
    })

}

angular 
    .module('app')
    .controller('HomeCtrl', HomeCtrl)