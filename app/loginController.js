.controller('LoginController', function($scope, $state, $uibModalInstance) {

    $scope.loginSubmit = function(){
        $state.go('member_home');
        $uibModalInstance.close();
    }

    $scope.reset = function(){
        $scope.loginData = {};
    }

    $scope.close = function(){
        $uibModalInstance.close();
    }

});