function Logout(){
    return {
      transclude: true,
      template: `
              <button ng-click='home.logOut()'>Log me out</button>
      `,
    }
}

angular
    .module('app')
    .directive('logout', Logout)