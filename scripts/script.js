var petApp = angular.module('petApp',['ngRoute']);

petApp.config(function($routeProvider){
	$routeProvider
	.when('/',{
		templateUrl: '../animal/cat.html',
		controller: 'catCtrl'
	})
	.when('/cat',{
		templateUrl: '../animal/cat.html',
		controller: 'catCtrl'
	})
	.when('/dog',{
		templateUrl: '../animal/dog.html',
		controller: 'dogCtrl'
	})
	.when('/rabbit',{
		templateUrl: '../animal/rabbit.html',
		controller: 'rabbitCtrl'
	})
	.when('/fish',{
		templateUrl: '../animal/fish.html',
		controller: 'fishCtrl'
	})
	.otherwise({
		controller: '/error',
		templateUrl: '../animal/error.html'
	});
});