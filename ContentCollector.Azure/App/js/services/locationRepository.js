(function (){
"use strict";

    var locationModule = angular.module('locationModule', []);

    locationModule.factor('locationRepository', function ($http, $q){

        return {
            getLocations: getLocations
        }

        function getLocations(){
            return $http.get('http://contentcollector.azurewebsites.net/tables/location', {
               headers: {
                   'ZUMO-API-VERSION' : '2.0.0'
               }
            })
        }

    });



})();
