angular.module('viewLog').component('viewLog', {
    templateUrl: 'view-log/view-log.template.html',

    controller: ['$routeParams', '$route', '$firebaseObject', '$firebaseArray', function viewLogController($routeParams, $route, $firebaseObject, $firebaseArray) {
        var self = this;
        var user = firebase.auth().currentUser;
        self.viewLogRef = firebase.database().ref().child("users").child(user.uid).child("view-log");
    }]
});