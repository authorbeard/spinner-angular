function Albums(){
    return {
      restrict: 'E',
      scope: {},
      transclude: true,
      controller: function(){
        this.albums=[]
        this.addAlb = function addAlb(alb){
          this.albums.push(alb)  
        }
        this.selectAlb = function selectAlb(index){
          for (var i=0; i < this.albums.length; i++){
            this.albums[i].selected=false
          }
          this.albums[index].selected=true
        }
      },
      controllerAs: 'albums',
      link: function($scope, $element, $attrs, $ctrl){
        $ctrl.selectAlb($attrs.active || 0)
      },
      template: `
        <div class="albums">
          <ul class="albums__list">
            <li ng-repeat="alb in albums.albums | limitTo:5">
              <a href="" ng-bind="alb.label" ng-click="albums.selectAlb($index);"></a>
            </li>
          </ul>
          <div class="albums__content" ng-transclude></div>
        </div>
        `
    }


  }


angular
   .module('app')
   .directive('albums', Albums)