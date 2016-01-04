
export default class flyerController{
    constructor($http, $stateParams, $window, $filter) {
	
		this.confirm= false;
		this.$window = $window;
	    this.filter = $filter;
		this.name = "initial name";
    }
	
	doSomeWork(){
		this.name = "hello flyer world abc";
	}
};

flyerController.$inject = ['$http', '$stateParams','$window', '$filter'];