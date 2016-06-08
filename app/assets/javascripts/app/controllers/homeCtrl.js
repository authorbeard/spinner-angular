function HomeCtrl(Auth, $cookies, $scope, $state, $http, user){

    this.user=user


    this.auth = function(){
        $state.go('auth')
    }






}

angular 
    .module('app')
    .controller('HomeCtrl', HomeCtrl)