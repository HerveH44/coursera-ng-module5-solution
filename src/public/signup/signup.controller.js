(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['SignUpService', 'MenuService'];
function SignUpController(SignUpService, MenuService) {
  var SignUpCtrl = this;

  SignUpCtrl.submit = function () {
    SignUpService.setUser( SignUpCtrl.user );
    SignUpCtrl.completed = true;
  };
}

})();
