function SessionCtrl(Auth, $scope, $state){

    console.log('sessionctrl')

    var config = {
        headers: {
            'X-HTTP-Method-Override': 'POST'
            }
      }

    this.authorize = function(){
        // debugger;
        var cred = {
              email: this.user.email,
              password: this.user.password
            }

        if (this.user.new){
            // debugger;
            Auth.register(cred, config).then(function(resp){
              // debugger;
                $state.go('home.user', {id: resp.user.id})
            }, function(error){
              // debugger;
                $scope.$emit('loginError', error.data.error)
            })
        }else{
            Auth.login(this.user).then(function(resp){
                console.log('successful login')
                // $state.go('home.user', {id: resp.user.id})
            }, function(error){
                $scope.$emit('loginError', error.data.error)
            })
        }
    }

    



}

angular
    .module('app')
    .controller('SessionCtrl', SessionCtrl)