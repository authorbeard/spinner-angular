function HomeCtrl(Auth, $cookies, $scope, $state, $http){
    this.user
    this.email = ''
    this.password = '' 
    this.username = ''

    this.authorize = function(){
      debugger;
        var credentials = {
            'email': this.email,
            'password': this.password
        }

        Auth.login(credentials).then(function(user){
            this.user = user.user
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

    $scope.$on('devise:logout', function(event, oldCurrentUser){
     debugger;
      $state.go('/')
    })





}

angular 
    .module('app')
    .controller('HomeCtrl', HomeCtrl)