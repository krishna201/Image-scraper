angular.module('KeywordService', []).factory('Keywords', ['$http', function($http) {

    return {
        getAll: function() {
            // return $http.get("/api1/get_all_data");
            return $http
                .get("/api1/get_all_data")
                .then(
                    function(data) {
                        console.log(data);
                        return data.data;
                    },
                    function err(response) {
                        return response;
                    }
                );
        },

        onClicksubmit: function(itemid) {
            console.log(itemid);
            return $http
                .get("/api1/get_single_data?itemid=" + itemid)
                .then(
                    function(data) {
                        console.log(data);
                        return data.data;
                    },
                    function err(response) {
                        return response;
                    }
                );
        }
    }

}]);