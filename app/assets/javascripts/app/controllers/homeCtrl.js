function HomeCtrl(Auth, $scope, $state){
    
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
        // debugger;
        console.log('setting user')
        sessionStorage['currUser']=JSON.stringify(userObj.user)
        $scope.currUser = userObj.user
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
        sessionStorage.clear()
        $state.go('home.auth', {}, {reload: true})
    })

    $scope.$on('devise:unauthorized', function(event, xhr, deferred){
        debugger;
        home.errors = 'Whoops. Check yer login credentials.'
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

angular 
    .module('app')
    .controller('HomeCtrl', HomeCtrl)