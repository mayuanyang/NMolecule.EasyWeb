"use strict";
var flyerController = function() {
  function flyerController($http, $stateParams, $window, $filter) {
    this.confirm = false;
    this.$window = $window;
    this.filter = $filter;
    this.name = "initial name";
  }
  return ($traceurRuntime.createClass)(flyerController, {doSomeWork: function() {
      this.name = "hello flyer world abc";
    }}, {});
}();
var $__default = flyerController;
;
flyerController.$inject = ['$http', '$stateParams', '$window', '$filter'];
Object.defineProperties(module.exports, {
  default: {get: function() {
      return $__default;
    }},
  __esModule: {value: true}
});
