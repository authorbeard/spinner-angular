function UserCtrl($scope, userAlbums){
    var ctrl = this
    
    ctrl.currUser = $scope.$parent.currUser
    ctrl.userAlbums = userAlbums

    ctrl.selection = 10

    ctrl.getDispAlbums = function(){
        ctrl.displayAlbums = ctrl.userAlbums.slice(0, ctrl.selection)
      }
    
    ctrl.addMore=function(){
          ctrl.selection += 10
          ctrl.getDispAlbums()
          $scope.$emit('addAlbums', event)
    }

    ctrl.getDispAlbums()

}

angular 
    .module('app')
    .controller('UserCtrl', UserCtrl)