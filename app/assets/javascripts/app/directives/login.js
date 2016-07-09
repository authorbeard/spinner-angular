function Login(){
    return {
      transclude: true,
      require: 'ng-messages',
      controller: SessionCtrl,
      controllerAs: 'session',
      templateUrl: 'app/views/login_form.html',
    }
}

angular
    .module('app')
    .directive('login', Login)