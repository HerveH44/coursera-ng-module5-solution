(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['SignUpService', 'MenuService'];
function SignUpController(SignUpService, MenuService) {
  var SignUpCtrl = this;

  SignUpCtrl.submit = function () {
    if( !SignUpCtrl.user.dish )
      return SignUpCtrl.error = true;

    MenuService.getMenuItem( SignUpCtrl.user.dish ).then(
      // Si tout s'est bien passé
      function() {
        SignUpService.setUser( SignUpCtrl.user );
        SignUpCtrl.completed = true;
      },
      // Si on a un soucis
      function () {
        return SignUpCtrl.error = true;
    });
  };
}

})();
