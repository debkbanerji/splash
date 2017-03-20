angular.module('generateGraph').component('generateGraph', {
    templateUrl: 'generate-graph/generate-graph.template.html',

    controller: ['$routeParams', '$route', '$firebaseObject', '$firebaseArray', function generateGraphController($routeParams, $route, $firebaseObject, $firebaseArray) {
        var self = this;
        var user = firebase.auth().currentUser;
        self.generateGraphRef = firebase.database().ref().child("users").child(user.uid).child("generate-graph");
    }]
});