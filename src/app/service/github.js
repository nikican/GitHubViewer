(function() {
	'use strict';

	angular
		.module('app.service')
		.factory('github', github);

	function github($http) {

		var service = {
			getUser: getUser,
			getRepositories: getRepositories,
			getRepository: getRepository,
			getCollaborators: getCollaborators
		};

		return service;

		function getUser(username) {
			var url = 'https://api.github.com/users/' + username;
			console.log('url', url);

			return $http.get(url)
				.then(function(response) {
					return response.data;
				});
		}

		function getRepositories(user) {
			var url = user.repos_url;
			console.log('url', url);

			return $http.get(url)
				.then(function(response) {
					return response.data;
				});
		}

		function getRepository(username, repositoryName) {
			var url = 'https://api.github.com/repos/' + username + '/' + repositoryName;
			console.log('url', url);

			return $http.get(url)
				.then(function(response) {
					return response.data;
				});
		}

		function getCollaborators(repository) {
			var url = repository.contributors_url;
			console.log('url', url);

			return $http.get(url)
				.then(function(response) {
					return response.data;
				});
		}
	};
}());