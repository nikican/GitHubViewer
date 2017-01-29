(function () {
    'use strict';

    angular
        .module('app.filter')
        .filter('possessive', function () {
            return possessive;
        });

    //change noun to it's possessive form
    function possessive(name) {
        if (!name)
            return;

        var nameValue = '';

        //check last character
        if (name.slice(-1) === "s") {
            nameValue = name + "'";
        } else {
            nameValue = name + "'s";
        }

        return nameValue;
    }
})();