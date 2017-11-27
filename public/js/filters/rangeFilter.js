var mobiquityApp = angular.module('mobiquityApp');

mobiquityApp.filter('range', function() {
	// filter for selecting range
  return function(input, total) {
    total = parseInt(total);
    for (var i=0; i<total; i++)
      input.push(i);
    return input;
  };
});