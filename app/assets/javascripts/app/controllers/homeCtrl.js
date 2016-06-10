function HomeCtrl(Auth, $scope, $state, $http, SessionSvc){
    console.log('homectrl')
    var home = this 

    home.currUser = function(){
        if (sessionStorage['currUser']){
            $scope.currUser = JSON.parse(sessionStorage['currUser'])
        }else{
            $scope.currUser = null
        }
    }

    
    console.log('homectrl sez: ' + $scope.currentUser)

    home.setUser = function(userObj){
        debugger;
        console.log('setting user')
        sessionStorage['currUser']=JSON.stringify(userObj.user)
        $scope.currUser = userObj.user
        $state.go('home.user', {id: $scope.currUser.id })
    }

    home.logout = Auth.logout

    $scope.$on('devise:login', function(event, userObj) {
        console.log('prev authenticated session')
        debugger;
        home.setUser(userObj)
    });

    $scope.$on('devise:new-session', function(event, userObj) {
        console.log('new login')
    });

    $scope.$on('devise:logout', function(event, userObj){
        // alert('So long, ' + userObj.user.name)
        $scope.currentUser = null
        sessionStorage.clear()
        $state.go('home.auth', {}, {reload: true})
    })

    $scope.$on('devise:unauthorized', function(event, xhr, deferred){
        // debugger;
    })


    home.currUser()


}

angular 
    .module('app')
    .controller('HomeCtrl', HomeCtrl)