'use strict';

// ***********This services written by**********
// Name : Saddam Shaikh
// Number : 8796608949

// *************************Get Details***********************
// getvehi service use to get all vehicle info by clinet_id
// getVehi service name use to get all vehicles

// *******************Add Services************************

// addEmployee service name use to add Employee details
MetronicApp.factory("Customer",['$http','$q' ,function($http,$q){
  return function(employee){
    var def = $q.defer();
    $http.post('http://54.178.137.116:1338/addemployee/',{employee:employee}).success(function(data){
      def.resolve(data);
    }).error(function(data){
      def.reject("error");
    })
    return def.promise;
  };
} ]);
