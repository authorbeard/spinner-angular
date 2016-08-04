function HomeCtrl(Auth, $scope, $state, $cookies){
    
    var home = this

    home.errors = null 

    home.currUser = function(){
        if (sessionStorage['currUser']){
            $scope.currUser = JSON.parse(sessionStorage['currUser'])
            // debugger;
        }else{
            $scope.currUser = null
        }
    }

    home.currUser()

    home.setUser = function(userObj){
        //this line makes currUser info avail to onEnter, resolve
        // sessionStorage['currUser']=JSON.stringify(userObj)
        $cookies.putObject('user', userObj)
        debugger;
        //this line is for use in other views/nested routes
        $scope.currUser = $cookies.getObject('user')
        $state.go('home.user', {id: $scope.currUser.id })
    }

    home.logout = Auth.logout

    $scope.$on('devise:login', function(event, userObj) {
        console.log('prev authenticated session')
        home.setUser(userObj)
    });

    $scope.$on('devise:new-session', function(event, userObj) {
        console.log('new login')
    });

    $scope.$on('devise:logout', function(event, userObj){
        $scope.currentUser = null
        $cookies.remove('user')
        $state.go('home.auth', {}, {reload: true})
    })

    $scope.$on('devise:unauthorized', function(event, xhr, deferred){
        $scope.errors = 'Whoops. Check yer login credentials.'
    })

    $scope.$on('error'), function(event, error){
        console.log('event: ' + event + " error: " + error)
        home.errors = error
    }

    $scope.$on('loginError'), function(event, error){
        debugger;
        console.log('Whoops. Check yer login credentials')
    }
}

    HomeCtrl.$inject = ['Auth', '$scope', '$state', '$cookies']

angular 
    .module('app')
    .controller('HomeCtrl', HomeCtrl)