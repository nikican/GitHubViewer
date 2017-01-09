(function() {
	'use-strict';

	angular
		.module('app.repository')
		.controller('RepositoryController', ['github', '$routeParams', RepositoryController]);

	function RepositoryController(github, $routeParams) {
		var vm = this;
		vm.username = $routeParams.username;
		vm.repositoryName = $routeParams.repositoryname;

		searchForRepository();

		function searchForRepository() {
			github.getRepository(vm.username, vm.repositoryName)
				.then(onSearchForRespositorySuccess, onSearchForRespositoryError);
		}

		function onSearchForRespositorySuccess(data) {
			vm.repository = data;

			loadCollaborators();
		};

		function onSearchForRespositoryError(response) {
			vm.error = 'Could not fetch repository';
		};

		function loadCollaborators() {
			github.getCollaborators(vm.repository)
				.then(onLoadCollaboratorsSuccess, onLoadCollaboratorsError);
		};

		function onLoadCollaboratorsSuccess(data) {
			vm.collaborators = data;
		};

		function onLoadCollaboratorsError(response) {
			vm.error = 'Could not fetch collaborators';
		};
	}
}())