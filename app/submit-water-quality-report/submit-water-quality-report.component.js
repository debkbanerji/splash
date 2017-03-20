angular.module('submitWaterQualityReport').component('submitWaterQualityReport', {
    templateUrl: 'submit-water-quality-report/submit-water-quality-report.template.html',

    controller: ['$routeParams', '$route', '$firebaseObject', '$firebaseArray', function submitWaterQualityReportController($routeParams, $route, $firebaseObject, $firebaseArray) {
        var self = this;
        var user = firebase.auth().currentUser;
        self.submitWaterQualityReportRef = firebase.database().ref().child("users").child(user.uid).child("submit-water-quality-report");
    }]
});