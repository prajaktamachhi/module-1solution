
(function(){
  'use strict';

  angular.module('LunchChecker',[])
        .controller('LunchCheckController', LunchCheckController)
        .$inject = ['$scope'];

//Controller function
  function LunchCheckController($scope){
    $scope.menuItems = "";
    $scope.response = "";
    $scope.alertState = "";


//function to split the lunch menu text and count the no. of items
    function getMenuItemsCount(string){
      var itemCount = 0;
      var stringArray = string.split(',');
      for (var i = 0; i < stringArray.length; i++) {
        stringArray[i] = stringArray[i].replace(/ /g,'');
        if(stringArray[i].length >0) itemCount++;
      }
      return itemCount;
    };


     $scope.checkIfTooMuch = function(){
       switch (getMenuItemsCount($scope.menuItems)){
         case 0:
           $scope.response = 'Please enter data first';
           $scope.alertState = 'danger';

           break;
         case 1:
         case 2:
         case 3:
           $scope.response = 'Enjoy!';
           $scope.alertState = 'success';

           break;
         default:
           $scope.response = 'Too much!';
           $scope.alertState = 'warning';
    
       }
    };

  };
})();
