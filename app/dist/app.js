"use strict";
var $__angular__,
    $__angular_45_ui_45_router__,
    $__traceur_45_runtime__,
    $__flyerController__,
    $__catalogController__;
var angular = ($__angular__ = require("angular"), $__angular__ && $__angular__.__esModule && $__angular__ || {default: $__angular__}).default;
var router = ($__angular_45_ui_45_router__ = require("angular-ui-router"), $__angular_45_ui_45_router__ && $__angular_45_ui_45_router__.__esModule && $__angular_45_ui_45_router__ || {default: $__angular_45_ui_45_router__}).default;
var traceur = ($__traceur_45_runtime__ = require("./traceur-runtime"), $__traceur_45_runtime__ && $__traceur_45_runtime__.__esModule && $__traceur_45_runtime__ || {default: $__traceur_45_runtime__}).default;
var flyerController = ($__flyerController__ = require("./flyerController"), $__flyerController__ && $__flyerController__.__esModule && $__flyerController__ || {default: $__flyerController__}).default;
var catalogController = ($__catalogController__ = require("./catalogController"), $__catalogController__ && $__catalogController__.__esModule && $__catalogController__ || {default: $__catalogController__}).default;
console.log("angular version: " + angular.version.full);
var myApp = angular.module('myApp', ['ui.router']).controller('flyerController', flyerController).controller('catalogController', catalogController);
myApp.config(['$stateProvider', '$urlRouterProvider', '$httpProvider', function($stateProvider, $urlRouterProvider, $httpProvider) {
  $urlRouterProvider.otherwise("/");
  $httpProvider.defaults.withCredentials = true;
  $stateProvider.state('root', {templateUrl: "app/views/shared/_layout.html"}).state('root.home', {
    url: "/",
    templateUrl: "app/views/flyer.html",
    controller: "flyerController as model"
  }).state('root.flyer', {
    url: "/flyer",
    templateUrl: "app/views/flyer.html",
    controller: "flyerController as model"
  }).state('root.catalog', {
    url: "/catalog",
    templateUrl: "app/views/catalog.html",
    controller: "catalogController as model"
  }).state('root.test', {
    url: "/test",
    templateUrl: "index.html"
  });
  ;
}]);
