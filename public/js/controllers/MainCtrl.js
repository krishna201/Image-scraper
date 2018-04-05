angular
    .module("MainCtrl", ["MainService", "toaster"])
    .controller("MainController", function($scope, Main, toaster) {
        $scope.tagline = "To the moon and back!";

        $scope.arts = Main.getAll();
        console.log($scope.arts);

        $scope.registerForm = {
            submit: function(form) {
                console.log($scope.regModel);
                var data = $scope.regModel;
                Main.krishna(data).then(function(data) {

                    console.log(data.success);
                    if (data.success === 1) {
                        toaster.pop("success", "success", "upload");
                    } else {
                        toaster.pop("error", "error", "some thing");
                    }
                });
                // .catch(function(error) {
                //     // toaster.pop("error", "failed", error);
                // });
            }
        };
    });