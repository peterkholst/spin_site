(function(royoApp){
  royoApp.directive('emailForm',function(){
    return{
      restrict: 'E',
      transclude: true,
      templateUrl: 'public/views/emailform.html',
      replace: true,
      scope: { userType: '=info' },
      controller: 'royoController',
      link: function () {
        // body...
      }

    }
  });
})(angular.module('royoApp'));
