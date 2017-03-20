angular.module('viewWaterQualityReports').component('viewWaterQualityReports', {
    templateUrl: 'view-water-quality-reports/view-water-quality-reports.template.html',

    controller: ['$routeParams', '$route', '$firebaseObject', '$firebaseArray', function viewWaterQualityReportsController($routeParams, $route, $firebaseObject, $firebaseArray) {
        var self = this;
        var user = firebase.auth().currentUser;
        self.viewWaterQualityReportsRef = firebase.database().ref().child("water-quality-reports");
        // self.sourceReports = $firebaseArray(self.viewWaterQualityReportsRef);
        self.qualityReportsArray = $firebaseArray(self.viewWaterQualityReportsRef);
    }]
});