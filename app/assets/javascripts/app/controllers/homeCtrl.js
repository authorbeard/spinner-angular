function HomeCtrl(Auth, $cookies, $scope, $state, $http){
    this.getUser = function(){
      debugger;
        Auth.currentUser().then(function(user){
            debugger;
            this.user=user.user
        }, function(error){
            debugger;
        })
    }

    this.email = ''
    this.password = '' 
    this.username = ''

    this.authorize = function(){
        var credentials = {
            'email': this.email,
            'password': this.password
        }

        var config = {
            headers: {
                'X-HTTP-Method-Override': 'POST'
            }
        };

        Auth.login(credentials, config).then(function(user){
            this.user = user.user
            $cookies.put('user_name', this.user.name)
            $cookies.put('user_id', this.user.id)
        }, function(error){
            alert('Something went wrong')
            console.log(error)
        })
    }


    this.logOut = function(){
      Auth.logout().then(function(oldUser){
        // debugger;
        alert("Logged out " + oldUser.user.name)
      }, function(error){
        alert("Error: " + error.status)
      })
    }

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


    this.getUser()

}

angular 
    .module('app')
    .controller('HomeCtrl', HomeCtrl)