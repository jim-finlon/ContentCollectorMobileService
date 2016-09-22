(function (){
"use strict";

    angular.module('app', ['locationModule', 'uiGmapgoogle-maps']);

    angular.module('app').config(function(uiGmapGoogleMapApiProvider) {
        uiGmapGoogleMapApiProvider.configure({
            //    key: 'your api key',
            v: '3.20', //defaults to latest 3.X anyhow
            libraries: 'weather,geometry,visualization'
        });
    })

    var controllerId = 'home';

    angular.module('app').controller(controllerId, homeController);

    homeController.$inject = ['locationRepository', 'uiGmapGoogleMapApi', 'uiGmapIsReady'];

    function homeController(locationRepo, googleMapApi, uiGmapIsReady){
        var vm = this;
        vm.locations = [];

        var defaultLocation = {};
        var currentLocation = {};

        vm.map = {};
        vm.maps = null;
        vm.mapInstance = null;

        vm.bounds = {};
        vm.mapMarker = {};
        vm.mapMarkers = [];

        vm.toolTips = [];

        activate();

        function activate(){
            setCurrentLocation.then(initMap).then(loadLocations).then(initMapMarkers);
        }

        function setCurrentLocation(){

        }

        function initMap(){

        }

        function loadLocations(){

        }

        function initMapMarkers(){

        }
    }



})();