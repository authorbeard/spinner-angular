function HomeCtrl(Auth, $cookies, $scope, $state, $http){
    this.message = "home controller, bitches"

    this.user=Auth.isAuthenticated()

    this.auth = function(){
        $state.go('auth')
    }



}

angular 
    .module('app')
    .controller('HomeCtrl', HomeCtrl)