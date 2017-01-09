(function() {
	'use-strict';

	angular
		.module('app.main')
		.controller('MainController', ['$interval', '$location', MainController]);

	function MainController($interval, $location) {
		var vm = this;
		vm.username = 'angular';
		vm.countdown = 5;
		vm.searchForUser = searchForUser;

		startCountdown();

		function decrementCountdown() {
			vm.countdown--;

			if (vm.countdown === 0) {
				vm.searchForUser(vm.username);
			}
		};

		var countdownInterval = null;

		function startCountdown() {
			countdownInterval = $interval(decrementCountdown, 1000, vm.countdown);
		};

		function searchForUser(username) {
			console.log('username', username);
			if (countdownInterval) {
				$interval.cancel(countdownInterval);
				vm.countdown = null;
			}

			$location.path('/user/' + username);
		};
	}
}());