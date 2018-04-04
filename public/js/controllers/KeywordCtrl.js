angular
    .module("KeywordCtrl", ["KeywordService"])
    .controller("KeywordController", function($scope, Keywords, $routeParams) {
        $scope.tagline = "Nothing beats a pocket protector!";
        $scope.arts = Keywords.getAll().then(function(data) {
            $scope.alldata = data.response;
            console.log(data);
        });

    })

.controller("Keyword1Controller", function($scope, Keywords, $routeParams) {
    $scope.tagline = "Nothing beats a pocket protector!";
    $scope.arts = Keywords.getAll().then(function(data) {
        $scope.alldata = data.response;
        console.log(data);
    });
    // console.log($scope.arts.$$state);
    var templateId = $routeParams.templateId;
    console.log(templateId);
    Keywords.onClicksubmit(templateId).then(function(data) {
        // console.log(data);
        $scope.word = data[0].keyword;
        $scope.imagelist = data[0].imageArray;
        console.log($scope.imagelist);
        //    toaster.pop("success", "Done", "Approved");
    });
});