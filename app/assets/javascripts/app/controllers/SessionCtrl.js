function SessionCtrl(Auth, $scope, $state){

    var config = {
        headers: {
            'X-HTTP-Method-Override': 'POST'
            }
      }

    this.authorize = function(){
        var cred = {
              email: this.user.email,
              password: this.user.password
            }

        if (this.user.new){
            Auth.register(cred, config).then(function(resp){
                $state.go('home.user', {id: resp.user.id})
                console.log('successful registration')
            }, function(error){
                alert('Are you sure you have not signed in before?')
                $scope.$emit('loginError', error.data.error)
            })
        }else{
            Auth.login(this.user).then(function(resp){              
                console.log('successful login')
            }, function(error){
                $scope.$emit('loginError', error.data.error)
            })
        }
    }
}

    SessionCtrl.$inject = ['Auth', '$scope', '$state']

angular
    .module('app')
    .controller('SessionCtrl', SessionCtrl)