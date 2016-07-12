app.factory('itemDetail', function($http) {
   return {
        getData: function(item) {
             
             return $http.get(item)
                       .then(function(result) {
                            return result;
                        });
        },
        

   }
});