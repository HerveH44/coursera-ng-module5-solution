(function () {
"use strict";

angular.module('public')
.controller('InfoController', InfoController);

InfoController.$inject = ['SignUpService', 'menuItem'];
function InfoController(SignUpService, menuItem) {
  var infoCtrl = this;

  infoCtrl.user = SignUpService.getUser();
  infoCtrl.noUser = !infoCtrl.user;
  infoCtrl.menuItem = menuItem;
}

})();
