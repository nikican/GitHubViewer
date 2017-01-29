(function () {
	'use strict';

	angular
		.module('app.main')
		.controller('MainController', ['$location', MainController]);

	function MainController($location) {
		var vm = this;
		vm.username = 'angular';
		vm.searchForUser = searchForUser;

		function searchForUser(username) {

			$location.path('/user/' + username);
		};
	}
} ());