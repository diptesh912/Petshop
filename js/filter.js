app.filter("username", function(){
return function (id, $scope) {
    return $scope.users[id-1].name;
  };

});

app.filter("status", function(){
return function (input,$scope) {
     if(input==false){
     	$scope.toDoStatus="remaining";
    	return "Remaining"}

    	else{
    		$scope.toDoStatus="completed";
    		return "Completed";
    		}
    	
  };

});