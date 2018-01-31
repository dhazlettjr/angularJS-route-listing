
"use strict";

// set up module and route providers

angular.module("highway", ["ngRoute"])
.config($routeProvider => {
  $routeProvider
    .when("/", {
      templateUrl: "partials/highwayOne.html",
      controller: "highwayOneCtrl"
    })
    .when("/next", {
        templateUrl: "partials/highwayTwo.html",
        controller: "highwayTwoCtrl"
    })
    .when("/home", {
      templateUrl: "partials/list.html"
    })
    .otherwise("/")
});