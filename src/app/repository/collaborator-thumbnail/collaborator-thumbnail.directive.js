(function () {
    'use strict';

    angular
        .module('githubViewer')
        .directive('ghCollaboratorThumbnail', ghCollaboratorThumbnail);

    function ghCollaboratorThumbnail() {
        var directive = {
            bindToController: true,
            controller: CollaboratorThumbnailController,
            controllerAs: 'vm',
            restrict: 'E',
            templateUrl: '/app/repository/collaborator-thumbnail/collaborator-thumbnail.directive.html',
            scope: {
                collaborator: "="
            }
        };

        return directive;
    }

    CollaboratorThumbnailController.$inject = ['$location'];

    function CollaboratorThumbnailController($location) {
        var vm = this;
        vm.searchForUser = searchForUser;

        function searchForUser() {

            $location.path('/user/' + vm.collaborator.login);
        }
    }
})();