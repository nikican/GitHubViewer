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

    function CollaboratorThumbnailController() {
        var vm = this;
    }
})();