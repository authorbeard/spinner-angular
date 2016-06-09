function SessionCtrl(Auth, $scope, $state, $http){

    this.message="session controller, bitches"

    this.authorize = function(){
        var cred = {
              email: this.user.email,
              password: this.user.password
            }

        var config = {
              headers: {
                  'X-HTTP-Method-Override': 'POST'
                  }
            }
        if (this.user.new){
            debugger;
            Auth.register(cred, config).then(function(resp){
              debugger;
                $state.go('home.user')
            }, function(error){
                $scope.$emit('loginError', error.data.error)
            })
        }else{
            Auth.login(this.user).then(function(user){
          debugger;
                $state.go('home.user')
            }, function(error){
                $scope.$emit('loginError', error.data.error)
            })
        }
    }
    



}

angular
    .module('app')
    .controller('SessionCtrl', SessionCtrl)