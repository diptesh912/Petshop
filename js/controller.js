app.controller('appCtrl', function($scope, itemDetail) {
	
	
    var root = 'data.json';
    itemDetail.getData(root).then(function(item) {
        $scope.items = item.data;   
        console.log($scope.items.data);     
       
    });
   
});