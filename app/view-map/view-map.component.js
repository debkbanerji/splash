angular.module('viewMap').component('viewMap', {
    templateUrl: 'view-map/view-map.template.html',

    controller: ['$routeParams', '$route', '$firebaseObject', '$firebaseArray', function viewMapController($routeParams, $route, $firebaseObject, $firebaseArray) {
        var self = this;
        var user = firebase.auth().currentUser;
        self.viewMapRef = firebase.database().ref().child("users").child(user.uid).child("view-map");


        // self.viewWaterSourceReportsRef = firebase.database().ref().child("water-source-reports");
        // self.sourceReportsArray = $firebaseArray(self.viewWaterSourceReportsRef);
        // var atlanta = {lat: 39.23, lng: -131.2};

        // var marker = new google.maps.Marker({
        //     position: atlanta,
        //     map: map
        // });


        // self.sourceReportsArray.$loaded(
        //     function(x) {
        //         console.log(x);
        //         for (var i = 0; i < x.length; i++) {
        //             placeMarkerAndPanTo({lat: x[i].latitude, lng: x[i].longitude},map);
        //         }
        //     }, function(error) {
        //         console.error("Error:", error);
        //     });

        // function placeMarkerAndPanTo(latLng, map) {
        //     var marker = new google.maps.Marker({
        //         position: latLng,
        //         map: map
        //     });
        //     // map.panTo(latLng);
        // }
    }]
});