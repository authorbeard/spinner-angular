function SessionSvc(){

    console.log('sessionsvc')
    

    this.currentUser = null
    this.id = ''

    this.create=function(userObj){
      debugger;
        this.currentUser=userObj
        this.id=userObj.id

    }

    this.destroy=function(){
        debugger;
        this.currentUser=null
        this.id=null
    }

}

angular 
    .module('app')
    .service('SessionSvc', SessionSvc)