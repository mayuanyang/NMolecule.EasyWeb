
export default class catalogController{
    constructor($http, $stateParams, $window, $filter) {
	
		this.confirm= false;
		this.$window = $window;
	    this.filter = $filter;
		this.name = "initial name";
    }
	
	doSomeWork(){
		this.name = "hello catalog world";
	}
};

catalogController.$inject = ['$http', '$stateParams','$window', '$filter'];