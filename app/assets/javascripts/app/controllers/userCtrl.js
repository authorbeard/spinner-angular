function UserCtrl($scope){
    var ctrl = this
    console.log('userctrl')
    console.log('userctrl sez: ' + sessionStorage['currUser'])

}

angular 
    .module('app')
    .controller('UserCtrl', UserCtrl)