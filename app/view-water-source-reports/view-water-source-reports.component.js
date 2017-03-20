angular.module('viewWaterSourceReports').component('viewWaterSourceReports', {
    templateUrl: 'view-water-source-reports/view-water-source-reports.template.html',

    controller: ['$routeParams', '$route', '$firebaseObject', '$firebaseArray', function viewWaterSourceReportsController($routeParams, $route, $firebaseObject, $firebaseArray) {
        var self = this;
        var user = firebase.auth().currentUser;
        self.viewWaterSourceReportsRef = firebase.database().ref().child("users").child(user.uid).child("view-water-source-reports");
    }]
});