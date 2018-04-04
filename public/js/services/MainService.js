angular
    .module("MainService", [])
    .factory("Main", ["$http", function($http) {
        // var userFactory = {};
        var data = []
        var arr = ["kri", "lskdfj"];
        return {
            getAll: function() {
                return arr;
            },
            krishna: function(kris) {
                // $http
                //     .get("/api1/getkey?email=" + kris.first_name)
                // .then(
                //     function(response) {
                //         // This function handles success
                //         console.log(response);
                //         data.push(response.data);
                //     },
                //     function(err) {
                //         // this function handles error
                //         console.log(err);

                //     }
                // );
                console.log(kris);
                return $http.get("/api1/search?keyword=" + kris.first_name)
                    .then(function(data) {
                        console.log(data);
                        return data.data;
                    }, function err(response) {
                        return response;
                    })
            }
        };

    }]);