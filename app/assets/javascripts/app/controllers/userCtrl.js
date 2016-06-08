function UserCtrl(Auth, $cookies){
  this.test=function(){
    debugger;
  }

  this.test()
}

angular 
    .module('app')
    .controller('UserCtrl', UserCtrl)