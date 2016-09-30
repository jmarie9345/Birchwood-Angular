(function () {

    'use strict';

    angular.module('app').directive('newDirective', function () {

        return {
            template: 'Name: {{customer.name}} Address: {{customer.address}}'
        };

    });

})();



