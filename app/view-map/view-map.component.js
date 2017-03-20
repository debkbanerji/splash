angular.module('viewMap').component('viewMap', {
    templateUrl: 'view-map/view-map.template.html',

    controller: ['$routeParams', '$route', '$firebaseObject', '$firebaseArray', function viewMapController($routeParams, $route, $firebaseObject, $firebaseArray) {
        var self = this;
        var user = firebase.auth().currentUser;
        self.viewMapRef = firebase.database().ref().child("users").child(user.uid).child("view-map");
    }]
});