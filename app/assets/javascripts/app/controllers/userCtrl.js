function UserCtrl(Auth, $scope){
    this.message = "user controller, bitches"
    

}

angular 
    .module('app')
    .controller('UserCtrl', UserCtrl)