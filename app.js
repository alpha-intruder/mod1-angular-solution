(function () {
'use strict'
angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.item = "";
  $scope.itemState = "";
  $scope.strLength = 0;

  var seperator = ",";
  $scope.splitString = function () {
    //check items in textbox and split them
    var arrayOfStrings = "";

    if ($scope.item === ""){
      $scope.itemState = "Empty!";
    }else{
      arrayOfStrings = $scope.item.split(seperator);
      $scope.strLength = arrayOfStrings.length;
      console.log($scope.strLength); //debugger
    }

    if($scope.strLength >= 1 && $scope.strLength <= 3) {
      $scope.itemState = "Enjoy!";
    }else if ($scope.strLength > 3) {
      $scope.itemState = "Too much!";
    }

    console.log($scope.itemState);//change state
  };

}

})();
