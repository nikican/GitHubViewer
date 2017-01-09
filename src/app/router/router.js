(function() {
	'use strict';

	var router = angular.module('app.router');

	router.config(function($routeProvider) {
		$routeProvider
			.when('/main', {
				templateUrl: 'app/main/main.html',
				controller: 'MainController',
				controllerAs: 'vm'
			})
			.when('/user/:username', {
				templateUrl: 'app/user/user.html',
				controller: 'UserController',
				controllerAs: 'vm'
			})
			.when('/repository/:username/:repositoryname', {
				templateUrl: 'app/repository/repository.html',
				controller: 'RepositoryController',
				controllerAs: 'vm'
			})
			.otherwise({
				redirectTo: '/main'
			});
	});
}());