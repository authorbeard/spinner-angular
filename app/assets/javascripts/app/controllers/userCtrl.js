function UserCtrl(Auth, $cookies, $scope){
    this.message = "user controller, bitches"
    
    this.test=function(){
      debugger;
    }


  this.test()
}

angular 
    .module('app')
    .controller('UserCtrl', UserCtrl)