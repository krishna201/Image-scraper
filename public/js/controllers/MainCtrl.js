angular
    .module("MainCtrl", ["MainService"])
    .controller("MainController", function($scope, Main) {
        $scope.tagline = "To the moon and back!";

        $scope.arts = Main.getAll();
        console.log($scope.arts);

        $scope.registerForm = {
            submit: function(form) {
                console.log($scope.regModel);
                var data = $scope.regModel;
                Main.krishna(data)
                    .then(function(data) {
                        console.log(data);
                    })
                    // .catch(function(error) {
                    //     // toaster.pop("error", "failed", error);
                    // });
            }
        };
    });