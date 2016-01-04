import angular from 'angular';
import router from 'angular-ui-router';
import traceur from './traceur-runtime';
import flyerController from './flyerController'
import catalogController from './catalogController'

console.log("angular version: " + angular.version.full);

var myApp = angular.module('myApp', ['ui.router'])
	.controller('flyerController', flyerController)
	.controller('catalogController', catalogController);

myApp.config(['$stateProvider', '$urlRouterProvider','$httpProvider', function($stateProvider, $urlRouterProvider,$httpProvider) {
	// For any unmatched url, redirect to /state1
	$urlRouterProvider.otherwise("/");
	
	// Use WithCredentials
	$httpProvider.defaults.withCredentials = true;
	
	// Now set up the states
	$stateProvider
		.state('root', {
			templateUrl: "app/views/shared/_layout.html"
		})
		.state('root.home', {
		   url: "/",
           templateUrl: "app/views/flyer.html",
		   controller: "flyerController as model"
       })
        	
        // Flyer
       .state('root.flyer', {
		   url: "/flyer",
           templateUrl: "app/views/flyer.html",
		   controller: "flyerController as model"
       })
         // Catalog
       .state('root.catalog', {
		   url: "/catalog",
           templateUrl: "app/views/catalog.html",
		   controller: "catalogController as model"
       })
	   .state('root.test', {
		   url: "/test",
           templateUrl: "index.html"
		   
       })
	   ;
}]);


