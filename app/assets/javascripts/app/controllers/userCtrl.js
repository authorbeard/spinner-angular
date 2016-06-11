function UserCtrl($scope){
    var ctrl = this
    // console.log('userctrl sez: ' + sessionStorage['currUser'])
    
    var userData = JSON.parse(sessionStorage['currUser'])
    ctrl.currUser = {
          userId: userData.id, 
          name: userData.name,
          email: userData.email,
          albums: userData.user_albums
    }

    ctrl.selection = 10

    ctrl.getDispAlbums = function(){
        ctrl.displayAlbums = ctrl.currUser.albums.slice(0, ctrl.selection)
      }
    

    ctrl.addMore=function(){
          // debugger;
          ctrl.selection += 10
          ctrl.getDispAlbums()
          $scope.$broadcast('addAlbums', event)
          // var nextSet = ctrl.selection

          // ctrl.displayAlbums.push()
    }


    $scope.$watch(function(){
      return ctrl.displayAlbums
      debugger;
    }, function(event){
      
    })

    ctrl.getDispAlbums()

}

angular 
    .module('app')
    .controller('UserCtrl', UserCtrl)