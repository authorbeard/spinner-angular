function Login(){
    return {
      transclude: true,
      require: 'ng-messages',
      controller: SessionCtrl,
      controllerAs: 'session',
      templateUrl: 'app/views/login_form.html',
      // link: function($scope, $element, $attrs, $ctrl){
      //     var scope = $scope
      //     var attrs = $attrs
      //     debugger;
      //     $element.on('click', function(scope, attrs){
      //       debugger;
      //     })
      // }
    }

}

angular
    .module('app')
    .directive('login', Login)