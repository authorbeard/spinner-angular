function UserCtrl($scope, userAlbums){
    var ctrl = this
    
    ctrl.currUser = $scope.$parent.currUser
    ctrl.userAlbums = userAlbums

    ctrl.selection = 10

    ctrl.getDispAlbums = function(){
        ctrl.displayAlbums = ctrl.currUser.user_albums.slice(0, ctrl.selection)
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
      // ctrl.currUser.albums[alb.id - 1].spins ++
      // event.currentScope.$parent.currUser.user_albums
      // console.log(ctrl.currUser.user_albums)
      for (i in ctrl.displayAlbums){
        // debugger 
          var dAlb=ctrl.displayAlbums[i]
          // debugger;
          if (dAlb.album_id === alb.album_id){
            debugger;
                dAlb.spins ++
          }
      }
      debugger;
    })

    // $scope.$watch(function(){
    //     return ctrl.currUser.user_albums
    //   debugger;
    // }, function(ov, nv){
    //   debugger;
    // }, true)




    ctrl.getDispAlbums()

}

angular 
    .module('app')
    .controller('UserCtrl', UserCtrl)