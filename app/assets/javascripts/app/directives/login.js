function Login(){
    return {
      transclude: true,
      controller: 'HomeCtrl',
      controllerAs: 'home',
      templateUrl: 'app/views/login_form.html',
    }

}

angular
    .module('app')
    .directive('login', Login)