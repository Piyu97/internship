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
app.controller("signupController",function($scope,$http){
  $scope.register=function(){
    let data={
      username:$scope.name,
      email:$scope.email,
      password:$scope.password,
      reenterpassword:$scope.reenterpassword


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

//Help
app.controller("helpController",function($scope,$http){
  $scope.helpMethod=function(){
    let data={
      firstname:$scope.firstname,
      lastname:$scope.lastname,
      problem:$scope.problem


    }
  console.log(data);
    $http.post("http://localhost:3000/givehelp",data).then(function(response){
      console.log(response.data);

    });



  }



});
//eof help
//acc
app.controller("accController",function($scope,$http){
  $scope.accMethod=function(){
    let data={
      name:$scope.name,
      email:$scope.email,
      number:$scope.number


    }
  console.log(data);
    $http.post("http://localhost:3000/giveacc",data).then(function(response){
      console.log(response.data);

    });



  }



});
//eof acc
//FEEDBACK
app.controller("feedbackController",function($scope,$http){
  $scope.FeedbackMethod=function(){
    let data={
      name:$scope.name,
      desgination:$scope.desgination,
      feedbacks:$scope.feedbacks


    }
  console.log(data);
    $http.post("http://localhost:3000/givefeedback",data).then(function(response){
      console.log(response.data);

    });



  }



});

//eof FEEDBACK
