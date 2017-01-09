(function() {
	'use-strict';

	angular
		.module('app.user')
		.controller('UserController', ['github', '$routeParams', UserController]);

	function UserController(github, $routeParams) {
		var vm = this;
		vm.username = $routeParams.username;
		vm.repositoriesSortOrder = "-stargazers_count";

		searchForUser();

		function searchForUser() {
			github.getUser(vm.username).then(onSearchForUserSuccess, onSearchForUserError);
		}

		function onSearchForUserSuccess(data) {
			vm.user = data;

			loadRepositories();
		};

		function onSearchForUserError(response) {
			vm.error = 'Could not fetch user';
		};

		function loadRepositories() {
			github.getRepositories(vm.user)
				.then(onLoadRepositoriesSuccess, onLoadRepositoriesError);
		};

		function onLoadRepositoriesSuccess(data) {
			vm.repositories = data;
		};

		function onLoadRepositoriesError(response) {
			vm.error = 'Could not fetch repositories';
		};
	}
}());