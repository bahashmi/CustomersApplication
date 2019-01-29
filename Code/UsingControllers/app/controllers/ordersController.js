(function ()  {
    

    var OrdersController =function($scope,$routeParams,customersFactory) {
        var customerId = $routeParams.customerId;
        $scope.customer = null;
        
        function init() {
            //    $scope.customers = customersFactory.getCustomers(); 
        customersFactory.getCustomer(customerId).success(function(customer){
            $scope.customer = customer;

        })
        .error(function(data, status, headers, config) {
            // handle error
        });
        }


        init();
};
    
    OrdersController.$inject = ['$scope','$routeParams','customersFactory'];
    
    angular.module('customersApp')
    .controller('OrdersController', OrdersController);

}());

//lecture 51, minute 2.04
