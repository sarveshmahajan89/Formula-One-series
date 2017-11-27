var mobiquityApp = angular.module('mobiquityApp');

mobiquityApp.controller('f1ListCtrl', function ($scope,$location,$http) {
	// to do stuff
	$scope.selectedSession = 2005;
	$scope.raceData = {};
	$scope.raceResult = {};
	$scope.selectedRound = 0;

	$scope.setSession = function(session) {
		$scope.selectedSession = session;
		$scope.getRaceData();
	};

	$scope.getRaceData = function() {
		var url = 'http://ergast.com/api/f1/'+$scope.selectedSession+'.json';

		$http.get(url).success(function(data) {
			$scope.raceData = data.MRData.RaceTable.Races;
		});
	}

	$scope.getRaceResult = function(season, round) {
		$scope.selectedRound = round;
		var url = 'http://ergast.com/api/f1/'+season+'/'+round+'/'+'results.json';

		$http.get(url).success(function(data) {
			$scope.raceResult = data.MRData.RaceTable.Races[0].Results;
		});
	}
});
