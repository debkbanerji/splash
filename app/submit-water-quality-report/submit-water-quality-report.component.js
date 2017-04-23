angular.module('submitWaterQualityReport').component('submitWaterQualityReport', {
    templateUrl: 'submit-water-quality-report/submit-water-quality-report.template.html',

    controller: ['$routeParams', '$route', '$firebaseObject', '$firebaseArray', function submitWaterQualityReportController($routeParams, $route, $firebaseObject, $firebaseArray) {
        var self = this;
        var user = firebase.auth().currentUser;
        self.waterQualityReportsRef = firebase.database().ref().child("water-quality-reports");
        self.totalQualityReportsRef = firebase.database().ref().child("total-quality-reports");
        self.waterQualities = ["Safe", "Treatable", "Unsafe"];
        self.selectedQuality = "Safe";
        self.reportNumber = Date.now();

        self.waterQualityReportsObject = $firebaseArray(self.waterQualityReportsRef);
        self.totalQualityReportsObject = $firebaseObject(self.totalQualityReportsRef);
        self.latitude = 33.7773767;
        self.longitude = -84.3973503;
        self.virusPPM = null;
        self.contaminantPPM = null;

        self.submitResultText = document.getElementById("submit-result-text");

        self.submitReport = function () {
            // console.log(self.virusPPM);
            // console.log(self.contaminantPPM);
            if (self.virusPPM !== null && self.contaminantPPM !== null) {
                // console.log("SUBMITT");
                totalReports = self.totalQualityReportsObject.$value;
                self.totalQualityReportsRef.set(totalReports);
                var report = {
                    "contaminant-ppm": self.contaminantPPM,
                    "date-time": Date.now(),
                    "latitude": self.latitude,
                    "longitude": self.longitude,
                    "report-id": totalReports + 1,
                    "reporter-name": user.displayName,
                    "reporter-uid": user.uid,
                    "virus-ppm": self.virusPPM,
                    "water-quality": self.selectedQuality.toUpperCase().replace("-", "_")
                };
                self.waterQualityReportsObject.$add(report);
                self.totalQualityReportsRef.set(totalReports + 1);
                self.submitResultText.innerHTML = "Successfully Submitted Water Quality Report " + (totalReports + 1);
                // console.log(self.submitResultText);
            }
        }
    }]
});