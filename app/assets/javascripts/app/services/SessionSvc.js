function SessionSvc(){

    this.currentUser = null
    this.id = ''

    this.create=function(userObj){
      // debugger;
        this.currentUser=userObj
        this.id=userObj.id

    }

    this.destroy=function(){
        this.currentUser=null
        this.id=null
    }

}

angular 
    .module('app')
    .service('SessionSvc', SessionSvc)