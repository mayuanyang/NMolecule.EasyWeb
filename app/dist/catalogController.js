"use strict";
var catalogController = function() {
  function catalogController($http, $stateParams, $window, $filter) {
    this.confirm = false;
    this.$window = $window;
    this.filter = $filter;
    this.name = "initial name";
  }
  return ($traceurRuntime.createClass)(catalogController, {doSomeWork: function() {
      this.name = "hello catalog world";
    }}, {});
}();
var $__default = catalogController;
;
catalogController.$inject = ['$http', '$stateParams', '$window', '$filter'];
Object.defineProperties(module.exports, {
  default: {get: function() {
      return $__default;
    }},
  __esModule: {value: true}
});
