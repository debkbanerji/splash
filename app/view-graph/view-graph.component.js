angular.module('viewGraph').component('viewGraph', {
    templateUrl: 'view-graph/view-graph.template.html',

    controller: ['$routeParams', '$route', '$firebaseObject', '$firebaseArray', function viewGraphController($routeParams, $route, $firebaseObject, $firebaseArray) {
        var self = this;
        var user = firebase.auth().currentUser;
        self.viewGraphRef = firebase.database().ref().child("users").child(user.uid).child("view-graph");
    }]
});