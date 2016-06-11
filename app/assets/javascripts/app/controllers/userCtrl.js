function UserCtrl($scope){
    var ctrl = this
    console.log('userctrl')
    // console.log('userctrl sez: ' + sessionStorage['currUser'])
    
    var userData = JSON.parse(sessionStorage['currUser'])
    ctrl.currUser = {
          userId: userData.id, 
          name: userData.name,
          email: userData.email,
          albums: userData.user_albums
    }

    console.log(ctrl.currUser)

    // $scope.$watch(function(){
    //   return ctrl.currUser.albums.length
    // }, function(event){
    //   debugger;
    // })
}

angular 
    .module('app')
    .controller('UserCtrl', UserCtrl)