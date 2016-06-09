function UserCtrl($scope, user){
    var ctrl = this

    ctrl.altUser = SessionSvc.currentUser
    ctrl.currUser = user

    

}

angular 
    .module('app')
    .controller('UserCtrl', UserCtrl)