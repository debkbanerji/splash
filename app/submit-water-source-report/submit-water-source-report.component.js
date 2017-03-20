angular.module('submitWaterSourceReport').component('submitWaterSourceReport', {
    templateUrl: 'submit-water-source-report/submit-water-source-report.template.html',

    controller: ['$routeParams', '$route', '$firebaseObject', '$firebaseArray', function submitWaterSourceReportController($routeParams, $route, $firebaseObject, $firebaseArray) {
        var self = this;
        var user = firebase.auth().currentUser;
        self.submitWaterSourceReportRef = firebase.database().ref().child("users").child(user.uid).child("submit-water-source-report");
    }]
});