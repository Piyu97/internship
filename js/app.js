var app=angular.module("myApp",["ngRoute"]);
app.config(function($routeProvider){
  $routeProvider.when("/expert",{
    controller:"myController",
    templateUrl:"experts.html"
  }).when("/gallery",{
    templateUrl:"gallery.html"

  }).when("/aboutus",{

    templateUrl:"aboutus.html"
  })


});
//signup refering register page
//login or register refer to login page
app.controller("myController",function($scope,$http){
  $scope.register=function(){
    let data={
      text:$scope.uname,
      email:$scope.email,
      password:$scope.password


    }
  console.log(data);
    $http.post("http://localhost:3000/givesignup",data).then(function(response){
      console.log(response.data);

    });



  }



});


//eo cmyController

app.controller("loginController",function($scope,$http){

  $scope.loginMethod=function(){
    var login={
      email:$scope.useremail,
      password:$scope.userpassword
    }
    console.log("inside login method");
    $http.post("http://localhost:3000/login",login).then(function(response){
        console.log(response.data);

    });


  }

});
