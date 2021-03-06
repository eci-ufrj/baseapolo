angular.module('baseapolo').controller('navbarCtrl', function ($scope, $state, userAPI) {

    console.log("navbarCtrl");

    $scope.user = userAPI;

    $scope.state = {
        isHome: function () { return $state.is('root.home') || $state.is('root.userHome') },
        isLogin: function () { return $state.is('root.login') }
    }
    
    $scope.logout = function () {
        // Logout
        userAPI.logout();
        $state.transitionTo('root.home');
    }
});
