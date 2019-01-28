// (function() {
//    var customerFactory = function() {
       
       
//        var factory = {};
//        factory.getCustomers = function() {
//            return customers;
//        };
       
//        factory.getCustomer = function(customerId){
//             for (var i=0,len =customers.length; i<len;i++){
//                 if (customers[i].id == parseInt(customerId)) {
//                     return customers[i];
//                 }
//             }
//            return {};
//        }dd
       
//        return factory;
//    };
    
    
//     angular.module('customersApp').factory('customersFactory',customerFactory);
    
// }());


(function() {
    var customersFactory = function($http) {
    
        var factory = {};
        
        factory.getCustomers = function() {
            return $http.get('/customers');
        };
        
        factory.getCustomer = function(customerId) {
            return $http.get('/customers/' + customerId);
        };
        
        return factory;
    };
    
    customersFactory.$inject = ['$http'];
        
    angular.module('customersApp').factory('customersFactory', 
                                           customersFactory);
                                           
}());