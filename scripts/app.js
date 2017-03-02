var app = angular.module('MyApp', ['ngMaterial']);

app.controller('MainCtrl', ['$scope', '$location', '$anchorScroll', function($scope, $location, $anchorScroll){
	$scope.clk1 = true;
	$scope.clk2 = true;
	$scope.clk3 = true;
	$scope.clk4 = true;
	$scope.clk5 = true;
	$scope.topbtn = false;

	$scope.gotoTop = function(){
		// set the location.hash to the id of
	    // the element wish to scroll to.
	    $location.hash('top');

        // call $anchorScroll()
        $anchorScroll();
	};
}]);

app.directive("scrollwatch", function ($window) {
    return function(scope, element, attrs) {     
        angular.element($window).bind("scroll", function() {
            if (this.pageYOffset >= 100) { // scroll down
                scope.topbtn = true;
                console.log('Scrolled below header.');
             } 
            else{ // on top
                scope.topbtn = false;
                console.log('Header is in view.');
            }
            scope.$apply();
        });
    };
});