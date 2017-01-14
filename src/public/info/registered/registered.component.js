(function () {
"use strict";

angular.module('public')
.component('registered', {
  templateUrl: 'src/public/info/registered/registered.html',
  bindings: {
    user: '<',
    menuItem: '<'
  },
});
})();
