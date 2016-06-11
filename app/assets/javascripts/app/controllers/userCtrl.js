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
          $scope.$emit('addAlbums', event)
          // var nextSet = ctrl.selection

          // ctrl.displayAlbums.push()
    }

    $scope.$on('albSpin', function(event, alb){
      ctrl.currUser.albums[alb.id - 1].spins ++
    })




    ctrl.getDispAlbums()

}

angular 
    .module('app')
    .controller('UserCtrl', UserCtrl)