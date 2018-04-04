angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

    // home page
        .when("/", {
        templateUrl: "views/home.html",
        controller: "MainController"
    })

    .when("/keywordlist", {
            templateUrl: "views/keywordlist.html",
            controller: "KeywordController"
        })
        .when("/keywordlist/:templateId", {
            templateUrl: "views/image-detail.html",
            controller: "Keyword1Controller"
        });

    $locationProvider.html5Mode(true);

}]);