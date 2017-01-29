(function () {
	'use-strict';

	angular
		.module('app.user')
		.controller('UserController', ['github', '$routeParams', UserController]);

	function UserController(github, $routeParams) {
		var vm = this;
		vm.username = $routeParams.username;
		vm.sortField = 'name'; // set the default sort field
		vm.sortReverse = false;  // set the default sort order
		vm.searchRepo = '';
		vm.sortByName = sortByName;
		vm.sortByStargazersCount = sortByStargazersCount;
		vm.sortByLanguage = sortByLanguage;

		activate();

		function activate() {
			searchForUser();
		}

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

		function sortByName() {
			console.log('sort by name');
			vm.sortField = 'name';
			vm.sortReverse = !vm.sortReverse
		}
		function sortByStargazersCount() {
			console.log('sort by stargazers_count');
			vm.sortField = 'stargazers_count';
			vm.sortReverse = !vm.sortReverse;
		}
		function sortByLanguage() {
			console.log('sortByLanguage');
			vm.sortField = 'language';
			vm.sortReverse = !vm.sortReverse;
		}
	}
} ());