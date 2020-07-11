const URL="https://covid19.mathdro.id/api";

let app = angular.module('covid',[]);

app.controller('cntrl',($scope,$http)=>{
//code for cntrl
$scope.title="Covid-19 Info";
    
  $scope.changeValue=()=>{
    $scope.title= "Stay home stay safe..";   
};

$http.get(URL).then((response)=>{
    console.log("success");
    console.log(response);
    $scope.all_data= response.data;
}, (error)=>{
    console.log(error);
});
// for country names
    $scope.get_c_data=()=>{
        let country= $scope.c;
        if (country==''){
            $scope.c_data=undefined;
            return;
        }

        $http.get(`${URL}/countries/${country}`).then((response)=>{
            console.log(response.data);
            $scope.c_data= response.data;
        },
        (error)=>{
            console.log(error);
        });
    };
});