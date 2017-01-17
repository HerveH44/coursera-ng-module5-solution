(function () {
"use strict";

angular.module('public')
.directive('favoritedish', FavoriteDish);

FavoriteDish.$inject = ['MenuService'];
function FavoriteDish(MenuService) {
  var ddo = {
    require: 'ngModel',
    link: function(scope, elm, attrs, ctrl) {
      ctrl.$asyncValidators.dish = function(modelValue, viewValue) {
        return MenuService.isMenuItem(modelValue);
      };
    }
  }
  return ddo;
}

})();
