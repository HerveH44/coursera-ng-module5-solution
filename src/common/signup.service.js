(function () {
"use strict";

angular.module('common')
.service('SignUpService', SignUpService);


SignUpService.$inject = ['$http', 'ApiPath'];
function SignUpService($http, ApiPath) {
  var service = this;

  service.setUser = function ( user ) {
    return service.user = user;
  };

  service.getUser = function () {
    return service.user;
  };
}
})();
