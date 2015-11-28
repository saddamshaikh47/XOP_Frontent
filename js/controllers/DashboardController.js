// customerController is use to add Employee

MetronicApp.controller('customerController', ['$scope','Customer', function( $scope, Customer) {

// this function is use to create employee
    $scope.create = function(employee){
      if ($scope.empForm.$valid) {
        // if form is valid then the data save in database
        addEmployee(employee).then(function(data){
          $scope.employee = {};
          $scope.empForm.$setPristine();
        },function(error){
          alert('Data Inserted UnSuccessfully');
        })
   }
   else {
       //if form is not valid
       $scope.empForm.submitted=true;
       alert("Please Enter Correct Details");
   }
    };

    // This function is used to reset the form
    $scope.reset = function(){
      $scope.employee = {};
      $scope.empForm.$setPristine();
    };

    // Sweet Alert function for add details
      document.querySelector('.swt_addbutton').onclick = function(){
      	swal("Successfully", "Employee Added", "success");
      }

}]);
