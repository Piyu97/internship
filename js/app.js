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
app.controller("myController",function($scope){
  $scope.title="Helloooo";

  $scope.datas=[{
      name:"Ramu",
      exp:4,
      price:20000
  },{
    name:"ARamu",
    exp:14,
    price:50000
  },{
    name:"BRamu",
    exp:6,
    price:220000
  },{
    name:"CRamu",
    exp:12,
    price:230000
  }]
});
