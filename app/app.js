
angular.module('happysApp', 
	['ngRoute'])
		.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
			$locationProvider.hashPrefix('!');
			
		}]);