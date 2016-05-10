var petApp = angular.module('petApp',['ngRoute']);

petApp.config(function($routeProvider){
	$routeProvider
	.when('/',{
		templateUrl: '../cat.html',
		controller: 'catCtrl'
	})
	.when('/cat',{
		templateUrl: '../cat.html',
		controller: 'catCtrl'
	})
	.when('/dog',{
		templateUrl: '../dog.html',
		controller: 'dogCtrl'
	})
	.when('/rabbit',{
		templateUrl: '../rabbit.html',
		controller: 'rabbitCtrl'
	})
	.when('/fish',{
		templateUrl: '../fish.html',
		controller: 'fishCtrl'
	})
	.otherwise({
		controller: '/error',
		templateUrl: '../error.html'
	});
});